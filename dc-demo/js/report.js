$(function () {
  var FilterView = Backbone.View.extend({
    tagName: 'div',
    initialize: function () {
      this.template = _.template($('#filter-view').text());
    },
    render: function () {
      this.$el.addClass('btn-group').html(this.template(this.model.toJSON()));
      return this;
    }
  });
  window.Report = Backbone.Model.extend({
    defaults: {
      clumns: [],
      charts: [],
      records: [],
    },
    initialize: function () {},
    load: function () {
      var result = MOCK['report_' + this.get('id')];
      this.set('clumns', result.clumns);
      this.set('filters', result.filters.map(function(filter){
        return new Backbone.Model(filter);
      }));
      this.set('charts', result.charts.map(function(chart){
        return new Backbone.Model(chart);
      }));
      this.set('records',result.records);
      this.trigger('loaded');
    }
  });
  window.ReportView = Backbone.View.extend({
    initialize: function () {
      this.template = _.template($('#report-view').text());
      this.render();
      this.model.on('loaded', this.renderTable, this);
    },
    renderTable: function () {
      this.$el.find('.table-container').append(new TableView({
        model: new Backbone.Model({
          clumns: this.model.get('clumns'),
          records: this.model.get('records')
        })
      }).render().el);
      this.renderChart();
      this.renderFilter();
      return this;
    },
    renderChart: function () {
      this.model.get('charts').forEach(function (chart) {
        chart.set('records', this.model.get('records'))
        this.$el.find('.chart').append(new ChartView({
          model: chart
        }).render().$el);
      }, this);
    },
    renderFilter: function () {
      this.model.get('filters').forEach(function (filter) {
        this.$el.find('.filter-container').append(new FilterView({
          model: filter
        }).render().$el);
      }, this);
    },
    render: function () {
      this.$el.html(this.template());
      return this;
    }          
  });
});
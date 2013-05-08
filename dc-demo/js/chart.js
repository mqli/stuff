$(function () {
  window.ChartView = Backbone.View.extend({
    tagName: 'div',
    initialize: function () {
      this.template = _.template($('#chart-view').text());
    },
    render: function () {
      this.$el.html(this.template(this.model.toJSON())).addClass('row-fluid').find('.chart-container').highcharts({
        chart: {
          type: this.model.get('type'),
          marginRight: 0
        },
        title: {
          text: ""//this.model.get('title')
        },
        yAxis:{
          title: {
            text: this.model.get('yAxisText')
          }
        },
        xAxis: {
          categories: _.pluck(this.model.get('records'), this.model.get('xAxis'))
        },
        series: _.map(this.model.get('clumns'), function (clumn) {
          return {
            name: clumn,
            color: this.model.get('color'),
            data: _.pluck(this.model.get('records'), clumn),
          };
        }, this)
      });
      return this;
    }
  });
});
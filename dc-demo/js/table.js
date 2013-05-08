$(function () {
  window.TableView = Backbone.View.extend({
    tagName: 'div',
    events: {
      'click a.sub-table': 'subTable',
      'click a.toggle-table': 'toggleTable',
      'click a.sortable': 'sort'
    },
    initialize: function () {
      this.template = _.template($('#table-view').text());
    },
    subTable: function (event) {
      var subTable = MOCK[$(event.target).attr('subTable')];
      new ReportView({
        model: new Report({
          clumns: subTable.clumns,
          records: subTable.records,
          charts: subTable.charts.map(function (chart) {
            return new Backbone.Model(chart);
          }),
          filters:[]
        })
      }).render().renderTable().$el.wrap('<tr class="subtable"><td colspan='+this.model.get('clumns').length+'>').parents('tr').insertAfter($(event.target).parent().parent());
      $(event.target).removeClass('sub-table').addClass('toggle-table');
      event.stopPropagation();
    },
    toggleTable: function (event) {
      event.stopPropagation();
      $(event.target).parent().parent().next('tr.subtable').toggle();
    },
    sort: function (event) {
      event.stopPropagation();
      var index =  $(event.target).parents('th').index(),
        desc = $(event.target).attr('desc');
        $(event.target).attr('desc', desc ? '' : 'true').toggleClass('icon-arrow-up').toggleClass('icon-arrow-down');
      $(event.target).parents('table:eq(0)').find('tbody').append(function () {
        $(this).find('tr.subtable').remove();
        $(this).find('a.toggle-table').removeClass('toggle-table').addClass('sub-table');
        return $(this).find('tr').toArray().sort(function (tr1, tr2) {
          var sort = tr1.children[index].innerText > tr2.children[index].innerText;
          return desc ? !sort : sort;
        });
      });
    },
    render: function () {
      this.$el.html(this.template(this.model.toJSON())).
        find('th a.tip').popover({
        });
      return this;
    }
  });
});
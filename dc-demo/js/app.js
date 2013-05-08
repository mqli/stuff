$(function () {
  window.App = Backbone.Model.extend({
    initialize: function () {
    }
  });
  window.AppView = Backbone.View.extend({
    initialize: function () {
      this.template = _.template($('#app-view').text());
      this.model.on('change:config', this.render, this);
    },
    events: {
      'click li.tab': 'onTabClick'
    },
    render: function () {
      this.$el.html(this.template(this.model.get('config')));
      $("#menu").jstree({ 
        "json_data" : {
          "data" : MOCK.config.menus
        },
        "themes":{
          "theme":"apple"
        },
        "plugins" : [ "themes", "json_data", "ui" ]
      }).bind("select_node.jstree", _.bind(this.onMenuClick, this));
      return this;
    },
    onTabClick: function (event) {
      $(event.currentTarget).addClass('active').siblings().removeClass('active');
      $('#report_' + $(event.target).attr('reportid')).show().siblings().hide();
    },
    onMenuClick: function (event,data) {
      var reportid = data.rslt.obj.attr('report');
      if (!reportid) return;
      $('<div id="report_'+reportid+'">').appendTo('#report').siblings().hide();
      var report = new Report({
            id: reportid
          }),
          reportView = new ReportView({
            model: report,
            el: this.$el.find('#report_' + reportid)
          });
      $('#tab-container ul').children().removeClass('active');
      if ($('#tab_'+reportid).length > 0) {
        $('#tab_'+reportid).addClass('active');
        $('#report_' + reportid).show().siblings().hide();
      } else {
        $('#tab-container ul').append('<li id="tab_' + reportid+ '" class="tab active"><a class="menu" href="###" reportid="'+reportid+'">'+data.rslt.obj.text()+'</a></li>');
      }
      report.load();
    }
  });
});
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
          "data" : MOCK.config.menus.map(this.parseTree, this)
        },
        "themes":{
          "theme":"apple"
        },
        "plugins" : [ "themes", "json_data", "ui" ]
      }).bind("select_node.jstree", _.bind(this.onMenuClick, this));
      return this;
    },
    parseTree: function (node) {
      node.metadata = node.data || {};
      node.data = node.text;
      if (node.isLeaf) {//子节不显示在树而显示在页签
        node.metadata.children = node.children;
        delete node.children;
        return node;
      }
      node.children && node.children.forEach(function (child) {
        this.parseTree(child);
      }, this);
      return node;
    },
    onTabClick: function (event) {
      var reportid = $(event.currentTarget).attr('reportid');
      $(event.currentTarget).addClass('active').siblings().removeClass('active');
      $('#report>div').hide();
      if ($('#report_'+reportid).length) {
        return $('#report_'+reportid).show();
      }
      $('<div id="report_'+reportid+'">').appendTo('#report').siblings().hide();
      var report = new Report({
        id: reportid
      }),
      reportView = new ReportView({
        model: report,
        el: this.$el.find('#report_' + reportid)
      });
     report.load();
    },
    onMenuClick: function (event, data) {
      var data = data.rslt.obj.data();
      if (data.children && data.children.length) {
        $('#tab-container ul').html(function () {
          return data.children.map(function (node) {
            return '<li id="tab_' + node.data.report+ '" reportid="'+node.data.report+'" class="tab active">'+
              '<a class="menu" href="###">'
                  + node.text +
              '</a>'+
            '</li>'
          }).join('');
        }).find('li:first').click();
      }
      return ;
    }
  });
});
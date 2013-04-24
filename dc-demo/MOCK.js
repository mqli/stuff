var MOCK = {
  report_111:{
    clumns:[{
      "key": "Date",
      "text": "Date"
    }, {
      "key": "DAU",
      "text": "DAU"
    }, {
      "key": "DNU",
      "text": "DNU"
    }, {
      "key": "IAP(USD)",
      "text": "IAP(USD)"
    }, {
      "key": "Retention",
      "text": "Retention"
    }, {
      "key": "ARPU(USD)",
      "text": "ARPU(USD)"
    }, {
      "key": "Installs",
      "text": "Installs"
    }, {
      "key": "DAU/MAU",
      "text": "DAU/MAU"
    }],
    filters:[{
      clumn: 'date',
      type: 'radio',
      options: [
        {text:'all', value: ''},
        {text:'1 week', value: ''},
        {text:'2 week', value: ''}
      ]
    },{
      clumn: 'region',
      type: 'radio',
      options: [
        {text:'en_us', value: ''},
        {text:'zh_cn', value: ''}
      ]
    },{
      clumn: 'equipment',
      type: 'radio',
      options: [
        {text:'iphone', value: ''},
        {text:'ipad', value: ''}
      ]
    }],
    charts:[{
      title: 'Daily Active User',
      type: 'line',
      xAxis: 'Date',
      clumns: ['DAU']
    },{
      title: 'Daily New User',
      type: 'bar',
      xAxis: 'Date',
      clumns: ['DNU'],
      color: '#BF0B23'
    },{
      title: 'Revenue',
      type: 'line',
      xAxis: 'Date',
      clumns: ['IAP(USD)'],
      color: '#BF0B23'
    },{
      title: 'Retention',
      type: 'line',
      xAxis: 'Date',
      clumns: ['Retention'],
      color: '#BF0B23'
    }],
    records:[{
      "Date": "2013-04-08",
      "DAU": 165914,
      "DNU": 5960,
      "IAP(USD)": 6467.369,
      "Retention": 0.3628,
      "ARPU(USD)": 0.03898,
      "Installs": "1466557",
      "DAU/MAU": "25.95%"
    }, {
      "Date": "2013-04-09",
      "DAU": 169827,
      "DNU": 6180,
      "IAP(USD)": 5782.866,
      "Retention": 0.3529,
      "ARPU(USD)": 0.03405,
      "Installs": "1472737",
      "DAU/MAU": "26.82%"
    }, {
      "Date": "2013-04-10",
      "DAU": 173003,
      "DNU": 6496,
      "IAP(USD)": 6787.803,
      "Retention": 0.3738,
      "ARPU(USD)": 0.03924,
      "Installs": "1479233",
      "DAU/MAU": "27.28%"
    }, {
      "Date": "2013-04-11",
      "DAU": 179332,
      "DNU": 6874,
      "IAP(USD)": 7281.598,
      "Retention": 0.3656,
      "ARPU(USD)": 0.0406,
      "Installs": "1486107",
      "DAU/MAU": "28.21%"
    }, {
      "Date": "2013-04-12",
      "DAU": 184658,
      "DNU": 7231,
      "IAP(USD)": 6139.823,
      "Retention": 0.3957,
      "ARPU(USD)": 0.03325,
      "Installs": "1493338",
      "DAU/MAU": "28.94%"
    }, {
      "Date": "2013-04-13",
      "DAU": 199372,
      "DNU": 9384,
      "IAP(USD)": 6861.68,
      "Retention": 0.4009,
      "ARPU(USD)": 0.03442,
      "Installs": "1502722",
      "DAU/MAU": "30.92%"
    }, {
      "Date": "2013-04-14",
      "DAU": 201456,
      "DNU": 9119,
      "IAP(USD)": 6733.252,
      "Retention": null,
      "ARPU(USD)": 0.03342,
      "Installs": "1511841",
      "DAU/MAU": "30.91%"
    }]
  },
  report_222: {
    clumns:[{
      "key": "Date",
      "text": "Date",
      "subTable": "report_333",
      sortable: true,
      'tip':'lalalal'
    }, {
      "key": "Send Users",
      "text": "Send Users"
    }, {
      "key": "Sent Rate",
      "text": "Sent Rate"
    }, {
      "key": "Sent num",
      "text": "Sent num"
    }, {
      "key": "Sent Per User",
      "text": "Sent Per User"
    }, {
      "key": "Accepted Users",
      "text": "Accepted Users"
    }, {
      "key": "Accepted Rate",
      "text": "Accepted Rate"
    }, {
      "key": "Accepted num",
      "text": "Accepted num"
    }, {
      "key": "Accepted Per User",
      "text": "Accepted Per User"
    }, {
      "key": "NU",
      "text": "NU"
    }, {
      "key": "Install Conversion",
      "text": "Install Conversion",
      "percent": true,
      "sortable": true
    }],
    charts: [],
    records: [{
      "Date": "2013-04-15",
      "Send Users": "394351",
      "Sent Rate": "40.05%",
      "Sent num": "25699746",
      "Sent Per User": "65.1697",
      "Accepted Users": "0",
      "Accepted Rate": "0%",
      "Accepted num": "0",
      "Accepted Per User": "0",
      "NU": "0",
      "Install Conversion": 0,
      "export": "<a href=\"interfaces/export_excel.php?app=fishbowl_fb_prod&pagename=kf_contribution&date=2013-04-15&username=manqing.li\">Export</a>"
    }, {
      "Date": "2013-04-14",
      "Send Users": "333784",
      "Sent Rate": "32.7%",
      "Sent num": "26969251",
      "Sent Per User": "80.7985",
      "Accepted Users": "0",
      "Accepted Rate": "0%",
      "Accepted num": "0",
      "Accepted Per User": "0",
      "NU": "0",
      "Install Conversion": 0,
      "export": "<a href=\"interfaces/export_excel.php?app=fishbowl_fb_prod&pagename=kf_contribution&date=2013-04-14&username=manqing.li\">Export</a>"
    }, {
      "Date": "2013-04-13",
      "Send Users": "323409",
      "Sent Rate": "32.2%",
      "Sent num": "25548886",
      "Sent Per User": "78.9987",
      "Accepted Users": "0",
      "Accepted Rate": "0%",
      "Accepted num": "0",
      "Accepted Per User": "0",
      "NU": "0",
      "Install Conversion": 0,
      "export": "<a href=\"interfaces/export_excel.php?app=fishbowl_fb_prod&pagename=kf_contribution&date=2013-04-13&username=manqing.li\">Export</a>"
    }, {
      "Date": "2013-04-12",
      "Send Users": "316114",
      "Sent Rate": "31.71%",
      "Sent num": "25687077",
      "Sent Per User": "81.2589",
      "Accepted Users": "0",
      "Accepted Rate": "0%",
      "Accepted num": "0",
      "Accepted Per User": "0",
      "NU": "0",
      "Install Conversion": 0,
      "export": "<a href=\"interfaces/export_excel.php?app=fishbowl_fb_prod&pagename=kf_contribution&date=2013-04-12&username=manqing.li\">Export</a>"
    }, {
      "Date": "2013-04-11",
      "Send Users": "325662",
      "Sent Rate": "32.5%",
      "Sent num": "26192500",
      "Sent Per User": "80.4285",
      "Accepted Users": "10136",
      "Accepted Rate": "0.07%",
      "Accepted num": "19332",
      "Accepted Per User": "1.90726",
      "NU": "81",
      "Install Conversion": 0.42,
      "export": "<a href=\"interfaces/export_excel.php?app=fishbowl_fb_prod&pagename=kf_contribution&date=2013-04-11&username=manqing.li\">Export</a>"
    }, {
      "Date": "2013-04-10",
      "Send Users": "313883",
      "Sent Rate": "31.15%",
      "Sent num": "23335757",
      "Sent Per User": "74.3454",
      "Accepted Users": "12575",
      "Accepted Rate": "0.14%",
      "Accepted num": "31924",
      "Accepted Per User": "2.53869",
      "NU": "148",
      "Install Conversion": 0.46,
      "export": "<a href=\"interfaces/export_excel.php?app=fishbowl_fb_prod&pagename=kf_contribution&date=2013-04-10&username=manqing.li\">Export</a>"
    }, {
      "Date": "2013-04-09",
      "Send Users": "356397",
      "Sent Rate": "35.08%",
      "Sent num": "27954098",
      "Sent Per User": "78.4353",
      "Accepted Users": "11865",
      "Accepted Rate": "0.1%",
      "Accepted num": "29292",
      "Accepted Per User": "2.46877",
      "NU": "174",
      "Install Conversion": 0.59,
      "export": "<a href=\"interfaces/export_excel.php?app=fishbowl_fb_prod&pagename=kf_contribution&date=2013-04-09&username=manqing.li\">Export</a>"
    }
  ],
    filters: []
  },
  report_333: {
    clumns:[{
      key:'Type',
      text: 'Type',
      "subTable": "report_444",
      sortable: true,
    },{
      key: 'Send Users',
      text: 'Send Users'
    },{
      key:'Sent Rate',
      text: 'Sent Rate'
    },{
      key:'Sent num',
      text: 'Sent num'
    },{
      key:'Sent Per User',
      text: 'Sent Per User'
    },{
      key:'Accepted Users',
      text: 'Accepted Users'
    },{
      key:'Accepted Rate',
      text: 'Accepted Rate'
    },{
      key:'Accepted num',
      text: 'Accepted num'
    },{
      key:'Accepted Per User',
      text: 'Accepted Per User'
    },{
      key:'NU',
      text: 'NU'
    },{
      key:'Install Conversion',
      text: 'Install Conversion'
    }],
    filters:[],
    charts:[{
      title: 'Send Users',
      type: 'line',
      xAxis: 'Date',
      clumns: ['Send Users']
    }],
    records: [{
      Type:'feed',
      'Send Users': 234486,
      'Sent Rate': '23.81%',
      'Sent num': 476186,
      'Sent Per User': 2.03077,
      'Accepted Users': 0,
      'Accepted Rate': '0%',
      'Accepted num':0,
      'Accepted Per User':0,
      'NU': 0,
      'Install Conversion': '0%'
    },{
      Type:'freegift',
      'Send Users': 234486,
      'Sent Rate': '23.81%',
      'Sent num': 476186,
      'Sent Per User': 2.03077,
      'Accepted Users': 0,
      'Accepted Rate': '0%',
      'Accepted num':0,
      'Accepted Per User':0,
      'NU': 0,
      'Install Conversion': '0%'
    }]
  },
  report_444: {
    clumns: [{
      key:'Type',
      text: 'Type',
      "subTable": "report_555"
    },{
      key: 'Send Users',
      text: 'Send Users'
    },{
      key:'Sent Rate',
      text: 'Sent Rate'
    },{
      key:'Sent num',
      text: 'Sent num'
    },{
      key:'Sent Per User',
      text: 'Sent Per User'
    },{
      key:'Accepted Users',
      text: 'Accepted Users'
    },{
      key:'Accepted Rate',
      text: 'Accepted Rate'
    },{
      key:'Accepted num',
      text: 'Accepted num'
    },{
      key:'Accepted Per User',
      text: 'Accepted Per User'
    },{
      key:'NU',
      text: 'NU'
    },{
      key:'Install Conversion',
      text: 'Install Conversion'
    }],
    charts: [],
    filter: [],
    records: [{
      Type:'feed_achievement_level_up',
      'Send Users': 234486,
      'Sent Rate': '23.81%',
      'Sent num': 476186,
      'Sent Per User': 2.03077,
      'Accepted Users': 0,
      'Accepted Rate': '0%',
      'Accepted num':0,
      'Accepted Per User':0,
      'NU': 0,
      'Install Conversion': '0%'
    },{
      Type:'feed_activity/consumer_award',
      'Send Users': 234486,
      'Sent Rate': '23.81%',
      'Sent num': 476186,
      'Sent Per User': 2.03077,
      'Accepted Users': 0,
      'Accepted Rate': '0%',
      'Accepted num':0,
      'Accepted Per User':0,
      'NU': 0,
      'Install Conversion': '0%'
    }]
  },
  report_555: {
    clumns: [{
      key:'Type',
      text: 'Type'
    },{
      key: 'Send Users',
      text: 'Send Users'
    },{
      key:'Sent Rate',
      text: 'Sent Rate'
    },{
      key:'Sent num',
      text: 'Sent num'
    },{
      key:'Sent Per User',
      text: 'Sent Per User'
    },{
      key:'Accepted Users',
      text: 'Accepted Users'
    },{
      key:'Accepted Rate',
      text: 'Accepted Rate'
    },{
      key:'Accepted num',
      text: 'Accepted num'
    },{
      key:'Accepted Per User',
      text: 'Accepted Per User'
    },{
      key:'NU',
      text: 'NU'
    },{
      key:'Install Conversion',
      text: 'Install Conversion'
    }],
    charts: [],
    filter: [],
    records: [{
      Type:'feed_achievement_level_up',
      'Send Users': 234486,
      'Sent Rate': '23.81%',
      'Sent num': 476186,
      'Sent Per User': 2.03077,
      'Accepted Users': 0,
      'Accepted Rate': '0%',
      'Accepted num':0,
      'Accepted Per User':0,
      'NU': 0,
      'Install Conversion': '0%'
    },{
      Type:'feed_activity/consumer_award',
      'Send Users': 234486,
      'Sent Rate': '23.81%',
      'Sent num': 476186,
      'Sent Per User': 2.03077,
      'Accepted Users': 0,
      'Accepted Rate': '0%',
      'Accepted num':0,
      'Accepted Per User':0,
      'NU': 0,
      'Install Conversion': '0%'
    }]
  },
  config:{
    menus:[{
      id:2222,
      text:'apps',
      menus: [{
        id: 111,
        text:'app 1'
      },{
        id: 222,
        text:'app 2'
      },{
        id: 333,
        text:'app 3'
      }]
    },{
      id:111,
      text:'report 1'
    },{
      id:222,
      text:'report 2'
    },{
      id:111,
      text:'report set',
      menus: [{
        id: 111,
        text:'report 1'
      },{
        id: 222,
        text:'report 2'
      },{
        id: 333,
        text:'report 3'
      }]
    }]
  }
};
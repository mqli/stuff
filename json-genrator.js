(function(){
  var reason = function () {

  };
  reason.int = function (min, max) {
    if (max == undefined) {
      max = min;
      min = 0;
    }
    return function () {
      return parseInt(Math.random() * (max - min) + min);
    };
  };
  reason.inc = function (start) {
    start = start || 0;
    return function () {
      return start ++;
    };
  };
  reason.float = function (min, max, fix) {
    return function () {
      return parseFloat((Math.random() * (max - min) + min).toFixed(fix || 0));
    };
  };
  reason.boolean = function (probability) {
    return function () {
      return Math.random() < (probability >=0 ? probability :  0.5);
    };
  };
  reason.string = function (length) {
    var chars = 'abcdefghigklmnopqrstuvwxyz'.split(''),
      radomint = reason.int(0, 24);
    return function () {
      var leg = length.call ? length() : length;
      var arr = new Array(leg);
      while (leg > 0) arr[--leg] = chars[radomint()];
      return arr.join('');
    };
  };
  reason.object = function (obj) {
    var keys = Object.keys(obj);
    return function () {
      var result = {};
      keys.forEach(function (key) {
        result[key] = obj[key]();
      });
      return result;
    };
  };
  reason.array = function(content, length) {
    return function () {
      var leg = length.call ? length() : length;
      var arr = new Array(leg);
      while (leg > 0) arr[--leg] = content();
      return arr;
    };
  };
})();
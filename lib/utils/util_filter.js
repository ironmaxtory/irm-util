'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var GenerateBaseFilter = function GenerateBaseFilter(List, keyName, valueName, tipMsg) {
  // 纯函数
  var _filter = function _filter(list, keyName, keyValue, valueName, tipMsg) {
    var len = list.length;
    var tip = tipMsg ? tipMsg : '(暂无信息)';

    for (var i = 0; i < len; i++) {
      if (list[i][keyName] == keyValue) {
        return list[i][valueName];
      }
    }

    return tip;
  };

  return function (key) {
    if (typeof key === 'string' && key.indexOf(',') !== -1) {
      var arr = key.split(',');
      var resultArr = [];
      arr.map(function (item) {
        resultArr.push(_filter(List, keyName, item, valueName));
      });
      return resultArr.join(',');
    } else {
      return _filter(List, keyName, key, valueName);
    }
  };
};

exports.default = GenerateBaseFilter;
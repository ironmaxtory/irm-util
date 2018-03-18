var GenerateBaseFilter = function(List, keyName, valueName, tipMsg){
  // 纯函数
  let _filter = function(list, keyName, keyValue, valueName, tipMsg){
    let len = list.length;
    let tip = tipMsg?tipMsg:'(暂无信息)';

    for (let i=0; i<len; i++) {
      if (list[i][keyName] == keyValue) {
        return list[i][valueName];
      }
    }

    return tip;
  };

  return function(key){
    if ((typeof key === 'string') && (key.indexOf(',') !== -1)) {
      let arr = key.split(',');
      let resultArr = [];
      arr.map((item)=>{
        resultArr.push(_filter(List, keyName, item, valueName));
      });
      return resultArr.join(',');
    } else {
      return _filter(List, keyName, key, valueName);
    }
  };
};


export default GenerateBaseFilter;

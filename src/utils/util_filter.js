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
    let arr = [];
    let resultArr = [];

    if (typeof key === 'string') {
      arr = key.split(',');
    } else if (key instanceof Array) {
      arr = key;
    }
    arr.map((item)=>{
      resultArr.push(_filter(List, keyName, item, valueName));
    });
    return resultArr.join(',');
  };
};


export default GenerateBaseFilter;

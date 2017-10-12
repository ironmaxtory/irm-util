/**
 * 枚举类型实用工具
 * - List: 枚举类型
 * - Filter: 过滤器
 */

const List = {
  // 风格枚举值
  StyleList: [
    { key: '1', value: '现代' },
    { key: '2', value: '简约' },
    { key: '3', value: '中式' },
    { key: '4', value: '欧式' },
    { key: '5', value: '地中海' },
    { key: '6', value: '美式' },
    { key: '7', value: '田园' },
    { key: '8', value: '新古典' },
    { key: '9', value: '东南亚' },
    { key: '10', value: '简欧' },
    { key: '11', value: '宜家' },
    { key: '12', value: '法式' },
    { key: '13', value: '日式' },
    { key: '14', value: '韩式' },
    { key: '15', value: '混搭' },
    { key: '16', value: '其他' },
  ],
};

export default {
  // 数据表
  List: List,

  // 过滤器
  Filter: {
    // 风格过滤器
    StyleFilter: (()=>{
      let len = List.StyleList.length;
      let _filter = function(key){
        for (let i=0; i<len; i++) {
          if (List.StyleList[i].key == key) {
            return List.StyleList[i].value;
          }
        }
        return '(暂无信息)';
      };
      return function(key){
        if (typeof key === 'string') {
          let arr = key.split(',');
          let resulyArr = [];
          arr.map((item)=>{
            resulyArr.push(_filter(item));
          });
          return resulyArr.join(',');
        }
      };
    })(),
  }
};

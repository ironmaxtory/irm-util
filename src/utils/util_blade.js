/**
 * blade 有刀锋之意
 * 因此本人旨在将该脚本文件打造成锋利的小工具
 */

const blade = {
  /**
   * 删除对象中的空属性
   * @param  {[type]} obj [description]
   * @return {[type]}     [description]
   */
  delEmptyAttr (obj, opt) {
    const option = {
      ...{
        corresVal: ['', undefined]
      },
      ...opt
    };

    const keys = Object.keys(obj);
    const corresVal = option.corresVal;
    for (let k of keys) {
      for (let v of corresVal) {
        if (obj[k] === v)
          delete obj[k];
      }
    }
  },
};

export default blade;

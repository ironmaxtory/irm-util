/**
 * Dom类型实用工具
 * - Style: 样式类型工具
 */

let Style = {
  /**
   * [getEleAbsLeft description]
   * @description 获取元素的绝对坐标x
   * @param [{Object}] ele dom元素
   * @return [{Number}] 绝对坐标x值
   */
  getEleAbsLeft (ele) {
    let absLeft = ele.offsetLeft;
    let parent = ele.offsetParent;

    while (parent !== null) {
      absLeft += parent.offsetLeft;
      parent = parent.offsetParent;
    }
    return absLeft;
  },

  /**
   * [getEleAbsRight description]
   * @description 获取元素的绝对坐标x与元素的宽之和
   * @param [{Object}] ele dom元素
   * @return [{Number}] 绝对坐标x值与元素的宽之和
   */
  getEleAbsRight (ele) {
    if (!ele) { return null; }
    return (Style.getEleAbsLeft(ele) + Style.getEleStyle(ele, 'width'));
  },

  /**
   * [getEleAbsTop description]
   * @description 获取元素的绝对坐标y
   * @param [{Object}] ele dom元素
   * @return [{Number}] 绝对坐标y值
   */
  getEleAbsTop (ele) {
    let absTop = ele.offsetTop;
    let parent = ele.offsetParent;

    while (parent !== null) {
      absTop += parent.offsetTop;
      parent = parent.offsetParent;
    }
    return absTop;
  },

  /**
   * [getEleAbsBottom description]
   * @description 获取元素的绝对坐标y与元素的高之和
   * @param [{Object}] ele dom元素
   * @return [{Number}] 绝对坐标y值与元素的高之和
   */
  getEleAbsBottom (ele) {
    if (!ele) { return null; }
    return (Style.getEleAbsTop(ele) + Style.getEleStyle(ele, 'height'));
  },

  /**
   * [getEleStyle description]
   * @description 获取元素的指定的计算样式
   * @param [{Object}] ele dom元素
   * @param [{String}] styleAttr 想要获得的样式属性名
   * @return [{Number}] 想要获得的样式属性值
   */
  getEleStyle (ele, styleAttr) {
    if (!ele) { return null; }
    if (!styleAttr) { return window.getComputedStyle(ele); }
    return parseFloat((window.getComputedStyle(ele))[styleAttr]);
  },

  /**
   * [getEleStyle description]
   * @description 获取元素的指定的计算样式
   * @param [{Object}] ele dom元素
   * @param [{String}] styleAttr 想要获得的样式属性名
   * @return [{Number}] 想要获得的样式属性值
   */
  getEleAllStyles (ele) {
    let styleObj = {};
    let computedStyle = window.getComputedStyle(ele);

    styleObj.W = parseFloat(computedStyle.width);
    styleObj.H = parseFloat(computedStyle.height);
    styleObj.OL = ele.offsetLeft;
    styleObj.OT = ele.offsetTop;
    styleObj.OR = styleObj.OL + styleObj.W;
    styleObj.OB = styleObj.OT + styleObj.H;
    styleObj.AbsLeft = Style.getEleAbsLeft(ele);
    styleObj.AbsRight = Style.getEleAbsRight(ele);
    styleObj.AbsTop = Style.getEleAbsTop(ele);
    styleObj.SH = ele.scrollHeight;
    styleObj.PT = parseFloat(computedStyle.paddingTop);
    styleObj.PB = parseFloat(computedStyle.paddingBottom);

    return styleObj;
  },
};

export default {
  Style: {
    getEleAbsLeft: Style.getEleAbsLeft,
    getEleAbsRight: Style.getEleAbsRight,
    getEleAbsTop: Style.getEleAbsTop,
    getEleAbsBottom: Style.getEleAbsBottom,
    getEleStyle: Style.getEleStyle,
    getEleAllStyles: Style.getEleAllStyles,
  },
};

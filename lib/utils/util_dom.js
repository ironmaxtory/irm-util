'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Dom类型实用工具
 * - Style: 样式类型工具
 *  - getEleAbsTop: 获取元素的绝对坐标y
 */

var Style = {
  /**
   * [getEleAbsLeft description]
   * @description 获取元素的绝对坐标x
   * @param [{Object}] ele dom元素
   * @return [{Number}] 绝对坐标x值
   */
  getEleAbsLeft: function getEleAbsLeft(ele) {
    var absLeft = ele.offsetLeft;
    var parent = ele.offsetParent;

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
  getEleAbsRight: function getEleAbsRight(ele) {
    if (!ele) {
      return null;
    }
    return Style.getEleAbsLeft(ele) + Style.getEleStyle(ele, 'width');
  },


  /**
   * [getEleAbsTop description]
   * @description 获取元素的绝对坐标y
   * @param [{Object}] ele dom元素
   * @return [{Number}] 绝对坐标y值
   */
  getEleAbsTop: function getEleAbsTop(ele) {
    var absTop = ele.offsetTop;
    var parent = ele.offsetParent;

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
  getEleAbsBottom: function getEleAbsBottom(ele) {
    if (!ele) {
      return null;
    }
    return Style.getEleAbsTop(ele) + Style.getEleStyle(ele, 'height');
  },


  /**
   * [getEleStyle description]
   * @description 获取元素的指定的计算样式
   * @param [{Object}] ele dom元素
   * @param [{String}] styleAttr 想要获得的样式属性名
   * @return [{Number}] 想要获得的样式属性值
   */
  getEleStyle: function getEleStyle(ele, styleAttr) {
    if (!ele) {
      return null;
    }
    if (!styleAttr) {
      return window.getComputedStyle(ele);
    }
    return parseFloat(window.getComputedStyle(ele)[styleAttr]);
  },


  /**
   * [getEleStyle description]
   * @description 获取元素的指定的计算样式
   * @param [{Object}] ele dom元素
   * @param [{String}] styleAttr 想要获得的样式属性名
   * @return [{Number}] 想要获得的样式属性值
   */
  getEleAllStyles: function getEleAllStyles(ele) {
    var styleObj = {};
    var computedStyle = window.getComputedStyle(ele);

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
  }
};

exports.default = {
  Style: {
    getEleAbsLeft: Style.getEleAbsLeft,
    getEleAbsRight: Style.getEleAbsRight,
    getEleAbsTop: Style.getEleAbsTop,
    getEleAbsBottom: Style.getEleAbsBottom,
    getEleStyle: Style.getEleStyle,
    getEleAllStyles: Style.getEleAllStyles
  }
};
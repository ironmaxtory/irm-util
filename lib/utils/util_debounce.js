"use strict";Object.defineProperty(exports,"__esModule",{value:true});var debounce=function debounce(fn,delay,isImmediate){var timer=null;return function(){var _this=this;var args=[].slice.call(arguments,0);var _fn=function _fn(){if(isImmediate){timer=null}else{fn.apply(_this,args)}};if(!timer&&isImmediate){fn.apply(this,args)}clearTimeout(timer);timer=setTimeout(_fn,delay)}};exports.default={debounce:debounce};
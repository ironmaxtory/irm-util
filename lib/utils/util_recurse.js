'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function UtilRecurse(tree, childKey) {
  var listeners = void 0;
  var init = function init() {
    listeners = [];
  };

  this.tree = tree;
  this.childKey = childKey;

  this.getListeners = function () {
    return listeners;
  };

  init();
}

UtilRecurse.prototype.subscribe = function (listener) {
  var listeners = this.getListeners();
  listeners.push(listener);
};

UtilRecurse.prototype.recurseNode = function (tree, childKey) {
  var _this = this;

  if ((typeof tree === 'undefined' ? 'undefined' : _typeof(tree)) !== 'object') {
    return false;
  }

  this.getListeners().map(function (listener) {
    listener(tree);
  });

  if (!tree[childKey] || tree[childKey].length === 0) {
    return false;
  }

  tree[childKey].map(function (item) {
    _this.recurseNode(item, childKey);
  });
};

UtilRecurse.prototype.run = function () {
  this.recurseNode(this.tree, this.childKey);
};

exports.default = UtilRecurse;

function UtilRecurse (tree, childKey) {
  let listeners;
  const init = ()=>{
    listeners = [];
  };

  this.tree = tree;
  this.childKey = childKey;

  this.getListeners = ()=>{
    return listeners;
  };

  init();
}

UtilRecurse.prototype.subscribe = function(listener){
  let listeners = this.getListeners();
  listeners.push(listener);
  return this;
};

UtilRecurse.prototype.recurseNode = function(tree, childKey, lv){
  if (typeof tree !== 'object') { return false; }

  if (!tree[childKey] || (tree[childKey].length===0)) { return false; }

  tree[childKey].map((item, idx, items)=>{
    this.getListeners().map((listener)=>{
      listener(item, idx, items, lv, tree);
    });
    this.recurseNode(item, childKey, lv+1);
  });
};

UtilRecurse.prototype.run = function(startLv=1){
  this.recurseNode(this.tree, this.childKey, startLv);
};

export default UtilRecurse;

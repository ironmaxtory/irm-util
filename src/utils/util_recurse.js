
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
};

UtilRecurse.prototype.recurseNode = function(tree, childKey){
  if (typeof tree !== 'object') { return false; }

  if (!tree[childKey] || (tree[childKey].length===0)) { return false; }

  tree[childKey].map((item)=>{
    this.getListeners().map((listener)=>{
      listener(item);
    });
    this.recurseNode(item, childKey);
  });
};

UtilRecurse.prototype.run = function(){
  this.recurseNode(this.tree, this.childKey);
};

export default UtilRecurse;

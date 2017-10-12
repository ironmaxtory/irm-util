/**
 * 数据节点类型实用工具
 * - TreeNode 树型节点类
 *  - 不依赖RecurseNode类
 * - RecurseNode 抽象递归类
 *  - 依赖TreeNode类
 */


// 数据节点类
let TreeNode = (function(){
  // 统一数据节点类
  var __CommonTreeNode = (function(){
    return function(that, data){
      that.id = data.id;
      that.label = data.name;
      // this.parentId = data.pid;
      that.parentId = data.pid==1?null:data.pid;

      that.open = data.open || false;
      if (!!data.children) {
        that.children = (data.children && []) || null;
      }
      // that.children = (data.children && []) || null;
      that.visible = data.visible || true;
      that.checked = data.checked || false;
      that.searched = data.searched || false;
      that.nodeSelectNotAll = data.nodeSelectNotAll || false;
    };
  })();
  return {
    // 模型库数据节点类
    ModelTreeNode: (function(){
      return function(data){
        __CommonTreeNode(this, data);
        this.models = data.models || null;
        // 用于存放孙子节点的容器
        this.modelsArr = [];
        // 指明节点类型
        this.appNodeType = 'model';
      };
    })(),
    // 材质库数据节点类
    MaterialTreeNode: (function(){
      return function(data){
        __CommonTreeNode(this, data);
        this.material = data.material || null;
        // 用于存放孙子节点的容器
        this.materialArr = [];
        // 指明节点类型
        this.appNodeType = 'material';
      };
    })(),
  };
})();

// 抽象递归节点类
let RecurseNode = (function(){
  return {
    // 转换模型节点
    transIntoModelTreeNodeArr: (function(){
      return function(data, arr){
        let newModels = [];
        let newTreeNodeData = new TreeNode.ModelTreeNode(data);
        RecurseNode.recurseRawModelsDataNode(data, newModels);
        newTreeNodeData.modelsArr = newModels;
        arr.push(newTreeNodeData);
        return newTreeNodeData;
      };
    })(),
    // 转换材质节点
    transIntoMaterialTreeNodeArr: (function(){
      return function(data, arr){
        let newMaterials = [];
        let newTreeNodeData = new TreeNode.MaterialTreeNode(data);
        RecurseNode.recurseRawMaterialsDataNode(data, newMaterials);
        newTreeNodeData.materialArr = newMaterials;
        arr.push(newTreeNodeData);
        return newTreeNodeData;
      };
    })(),

    // 递归收集所有孙子节点的models
    recurseRawModelsDataNode: (function(){
      return function(data, arr){
        if (Array.isArray(data.models)) {
          data.models.forEach(function(item){
            arr.push(item);
          });
        }
        if (!Array.isArray(data.children)) {
          return ;
        }

        let len = data.children.length;
        for (let i=0;i<len;i++) {
          RecurseNode.recurseRawModelsDataNode(data.children[i], arr);
        }
      };
    })(),
    // 递归收集所有孙子节点的materials
    recurseRawMaterialsDataNode: (function(){
      return function(data, arr){
        if (Array.isArray(data.material)) {
          data.material.forEach(function(item){
            arr.push(item);
          });
        }
        if (!Array.isArray(data.children)) {
          return ;
        }

        let len = data.children.length;
        for (let i=0;i<len;i++) {
          RecurseNode.recurseRawMaterialsDataNode(data.children[i], arr);
        }
      };
    })(),
    // 递归遍历原生数据节点
    recurseRawDataNode: (function(){
      return function(data, arr, fn){
        if (!Array.isArray(data)) {
          return ;
        }
        let len = data.length;
        for (let i=0;i<len;i++) {
          let newTreeNodeData = fn(data[i], arr);
          if (!Array.isArray((data[i]['children']))) {
            return ;
          } else {
            RecurseNode.recurseRawDataNode(data[i]['children'], newTreeNodeData.children, fn);
          }
        }
      };
    })(),
  };
})();

export default {
  TreeNode,
  RecurseNode,
};

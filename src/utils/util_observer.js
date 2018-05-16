const ObserverList = function () {
  this.observerList = [];
};

ObserverList.prototype.add = function (obj) {
  if (!obj) return false;

  if (this.observerList.indexOf(obj) != -1)
    return this.observerList;

  return this.observerList.push(obj);
};

ObserverList.prototype.clear = function () {
  this.observerList = [];
};

ObserverList.prototype.count = function () {
  return this.observerList.length;
};

ObserverList.prototype.get = function (index) {
  if ((index >= 0) && (index < this.observerList.length)) {
    return this.observerList[index];
  }
  return false;
};

ObserverList.prototype.insert = function (obj, index) {
  if (!obj || (index < 0))
    return -1;
  this.observerLists.splice(index, 0, obj);
  return index;
};

ObserverList.prototype.indexOf = function (obj) {
  if (!obj) return -1;
  return this.observerList.indexOf(obj);
};

ObserverList.prototype.removeIndexAt = function(index){
  if (index < 0) return false;

  this.observerList.splice(index, 1)[0];
};

const Subject = function () {
  this.observers = new ObserverList();
};

Subject.prototype.addObserver = function (observer) {
  this.observers.add(observer);
};

Subject.prototype.removeObserver = function (observer) {
  this.observers.removeIndexAt(this.observers.indexOf(observer));
};

Subject.prototype.notify = function () {
  let cnt = this.observers.count();
  let args = [].slice.call(arguments, 0);
  let updateFn;
  let observer;

  for (let i=0; i<cnt; i++) {
    observer = this.observers.get(i)
    updateFn = observer.update;
    updateFn.apply(observer, args);
  }
};


const Observer = function () {
  this.update = function () {};
};


export default {
  Observer,
  Subject,
};

export { Observer, Subject };

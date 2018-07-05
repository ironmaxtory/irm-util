/**
 * 实现一个全局事件监听的脚本
 * - 用于 H5 与 外界壳的通信，主要用于外界壳主动通知H5
 * - 外界壳可以是 QT / SU 等等
 * - 订阅/发布者 模式
 */

const DEFAULT_CONFIG = {
   needRegister: true,
 };

class Comm {
  constructor (config) {
    this.config = {
      ...DEFAULT_CONFIG,
      ...config,
    };
    this.listeners = {};
  }

  // 注册通信事件
  register (evtName) {
    // 已经注册过了
    if (this.listeners[evtName])
      return false;
    this.listeners[evtName] = [];
    return true;
  }

  // 注销通信事件
  unregister (evtName) {
    if (!this.listeners[evtName])
      return false;
    this.listeners[evtName] = undefined;
    return true;
  }

  // 订阅
  subscribe (evtName, cb) {
    if (typeof cb === 'function') {
      if (!this.listeners[evtName]) {
        if (this.config.needRegister)
          throw new Error(`通信事件："${evtName}"暂未注册！请注册后再使用！`);
        else
          this.listeners[evtName] = [];
      }
      this.listeners[evtName].push(cb);
      return true;
    }
    return false;
  }

  // 触发
  trigger (evtName) {
    if (!evtName || !this.listeners[evtName]) {
      return false;
    }
    let args = [...arguments].slice(1);
    this.listeners[evtName].map((cb)=>{
      cb(...args);
    });
  }

  // 取消订阅
  unsubscribe (evtName, cb) {
    if (!evtName || !this.listeners[evtName] || !cb || (typeof cb !== 'function')) {
      return false;
    }
    let len = this.listeners[evtName].length;
    for (let i=0; i<len; i++) {
      if (this.listeners[evtName][i] === cb) {
        this.listeners[evtName].splice(i, 1);
        return true;
      }
    }
  }
}

export default Comm;

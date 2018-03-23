const localStorage = window.localStorage;
const sessionStorage = window.sessionStorage;

const set = function(strg, key, value){
  strg.setItem(key, JSON.stringify(value));
};
const get = function(strg, key){
  return JSON.parse(strg.getItem(key)) || null;
};
const remove = function(strg, key){
  strg.removeItem(key);
};

export default {
  lcSet: (key, value)=>{
    set(localStorage, key, value);
  },
  lcGet: (key)=>{
    return get(localStorage, key);
  },
  lcRemove: (key)=>{
    remove(localStorage, key);
  },

  ssSet: (key, value)=>{
    set(sessionStorage, key, value);
  },
  ssGet: (key)=>{
    return get(sessionStorage, key);
  },
  ssRemove: (key)=>{
    remove(sessionStorage, key);
  },
}

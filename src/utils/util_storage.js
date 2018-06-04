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
    set(window.localStorage, key, value);
  },
  lcGet: (key)=>{
    return get(window.localStorage, key);
  },
  lcRemove: (key)=>{
    remove(window.localStorage, key);
  },
  lcClear: ()=>{
    window.localStorage.clear();
  },

  ssSet: (key, value)=>{
    set(window.sessionStorage, key, value);
  },
  ssGet: (key)=>{
    return get(window.sessionStorage, key);
  },
  ssRemove: (key)=>{
    remove(window.sessionStorage, key);
  },
  ssClear: ()=>{
    window.sessionStorage.clear();
  },
}

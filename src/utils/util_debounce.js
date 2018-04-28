const debounce = function(fn, delay, isImmediate) {
  let timer = null;
  return function() {
    let args = [].slice.call(arguments, 0);
    let _fn = ()=>{
      if (isImmediate) {
        timer = null;
      } else {
        fn.apply(this, args);
      }
    };

    if (!timer && isImmediate) {
      fn.apply(this, args);
    }

    clearTimeout(timer);
    timer = setTimeout(_fn, delay);
  };
};

export default {
  debounce,
};

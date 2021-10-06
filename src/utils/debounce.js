export default function(fun, interval = 100) {
  let timer = null;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fun(...args);
    }, interval);
  };
}

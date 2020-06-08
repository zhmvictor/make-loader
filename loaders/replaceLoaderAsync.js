const loaderUtils = require('loader-utils');

module.exports = function(source) {
  const options = loaderUtils.getOptions(this);
  // 异步loader, 返回 this.callback;
  const callback = this.async();
  
  setTimeout(() => {
    const result = source.replace('webpack', options.name);
    callback(null, result);
  }, 1000);
}

const loaderUtils = require('loader-utils');


// loader 本质是一个函数，但是不能使用箭头函数
// 因为函数里我们会改变 this 指向，箭头函数实现不了
module.exports = function(source) {
  return source.replace('lee', 'world');
  // this.query 里面封装的 loader 的参数
  // return source.replace('webpack', this.query.name);
  
  // 使用官方推荐的 loader-utils 更好
  // const options = loaderUtils.getOptions(this);
  // return source.replace('webpack', options.name);
  // const result = source.replace('webpack', options.name);
  // callback 可以传递更多的额外的信息
  // this.callback(
  //   err: Error | null,
  //   content: string | Buffer,
  //   sourceMap?: SourceMap,
  //   meta?: any
  // );
  // this.callback(null, result);
}

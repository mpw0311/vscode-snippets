class Middleware {
  constructor() {
    this.middlewares = [];
  }
  /**
   * 运行
   *
   * @param {*} ctx
   * @return {*}
   * @memberof Middleware
   */
  run(ctx) {
    const fn = this.compose(this.middlewares);
    return fn(ctx);
  }
  /**
   * 中间件
   *
   * @param {*} middlewares
   * @return {*}
   */
  compose(middlewares) {
    return function (ctx) {
      return dispatch(0);
      function dispatch(i) {
        let fn = middlewares[i];
        if (typeof fn !== 'function') return Promise.resolve();
        //   返回一个执行承诺
        return Promise.resolve(
          fn(ctx, function next() {
            // 执行下一个fn
            return dispatch(i + 1);
          })
        );
      }
    };
  }
  /**
   * 添加中间件
   *
   * @param {*} callback
   * @memberof Middleware
   */
  use(callback) {
    this.middlewares.push(callback);
  }
}

module.exports = Middleware;

function promisify(callbackFunction) {
    return function(...args) {
      return new Promise((resolve, reject) => {
        const callback = function(error, value) {
          if (error) {
            reject(error);
          } else {
            resolve(value);
          }
        }
        args.push(callback);
        callbackFunction.apply(this, args);
      });
    }
  }
module.exports=promisify;  
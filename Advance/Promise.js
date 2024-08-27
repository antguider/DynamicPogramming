class SimplePromise {
    constructor(executor) {
      this.callbacks = [];
      const resolve = (value) => {
        this.data = value;
        this.callbacks.forEach(callback => callback(value));
      };
      executor(resolve);
    }
  
    then(onResolved) {
      this.callbacks.push(onResolved);
    }
  }
  
  const promise = new SimplePromise(res => {
    setTimeout(() => res('Done!'), 1000);
  });
  
  promise.then(data => console.log(data)); // Output: 'Done!' after 1 second
  
function dynamicCurry(fn) {
    const curried = (...args) => {
      // If function is called with no arguments, execute it
      if (args.length === 0) return fn();
  
      // Return another curried function that accepts more arguments
      return (...nextArgs) => {
        if (nextArgs.length === 0) {
          return fn(...args); // Execute when no more arguments are provided
        }
        return curried(...args, ...nextArgs);
      };
    };
    return curried;
  }
  
  // Example usage:
  
  function sumAll(...numbers) {
    return numbers.reduce((a, b) => a + b, 0);
  }
  
  const curriedSumAll = dynamicCurry(sumAll);
  
  console.log(curriedSumAll(1)(2)(3)(4)()); // Output: 10
  console.log(curriedSumAll(1, 2, 3)(4)()); // Output: 10
  console.log(curriedSumAll(1)(2, 3, 4)()); // Output: 10
  
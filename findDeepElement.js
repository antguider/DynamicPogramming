function findDeepestElement(obj) {
    let deepestElement = {};
    let maxDepth = 0;
  
    function traverse(object, depth) {
      for (let key in object) {
        if (typeof object[key] === 'object' && object[key] !== null) {
          traverse(object[key], depth + 1);
        } else {
          if (depth > maxDepth) {
            maxDepth = depth;
            deepestElement = { [key]: object[key] };
          }
        }
      }
    }
  
    traverse(obj, 0);
    return deepestElement;
  }
  
  // Example usage
  const nestedObject = {
    a: {
      b: {
        c: {
          d: 5
        }
      }
    },
    e: {
      f: {
        c: {
          d: {
            k: 10
          }
        }
      }
    }
  };
  
  console.log(findDeepestElement(nestedObject)); // Output: { d: 5 }
  
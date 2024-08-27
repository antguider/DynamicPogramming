function deepClone(obj) {
    if(obj === null || typeof obj !== "object") {
        return obj;
    }

    if(Array.isArray(obj)) {
        return obj.map(deepClone);
    }
    
    const clonedObj = {};
    for(let key in obj) {
        clonedObj[key] = deepClone(obj[key])
    }
    return clonedObj;
  }
  
  const original = { a: 1, b: [{ c: 2 }, {d: 4}] };
  const clone = deepClone(original);
  console.log(clone);
  console.log(clone.b === original.b); // Output: false
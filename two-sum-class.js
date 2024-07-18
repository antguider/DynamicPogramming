// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Try programiz.pro");

class TwoSum {
    constructor() {
        this.map = new Map();
    }
    
    add(num) {
        if(this.map.get(num)) {
            this.map.set(num, this.map.get(num) + 1);
        } else {
            this.map.set(num, 1)
        }
    }
    
    find(num) {
        console.log(this.map);
        
        for(let [key, count] of this.map) {
            const remaning = num - key;
            if((key !== remaning && this.map.has(remaning)) || (key === remaning && count > 1)) {
                return true;
            }
        }
        return false;
    }
}

const twoSum = new TwoSum();
twoSum.add(1);
twoSum.add(1);
twoSum.add(3);

console.log("output>>>>", twoSum.find(2));

String.prototype.getSecondLastIndexOf = function(ch) {
    const lastindex = this.lastIndexOf(ch);
    if(!lastindex) {
        return lastindex;
    } else {
        return this.lastIndexOf(ch, lastindex - 1)
    }
}


// Example usage:
let str = "hellohelo";
console.log(str.getSecondLastIndexOf('l')); // Output: 7
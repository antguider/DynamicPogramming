const count = (function() {
    let count = 0;
    function update() {
        count++;
        return count;
    }
    update.reset = function() {
        count = 0;
    }
    return update;
})();

console.log(count());
console.log(count());
count.reset();
console.log(count());
function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            func(...args);
        }, delay);
    };
}

// Example usage:
function sayHello() {
    console.log("Hello!");
}

const debouncedHello = debounce(sayHello, 1000);

// This will only log "Hello!" once, even though it's called three times in quick succession.
debouncedHello();
debouncedHello();
debouncedHello();
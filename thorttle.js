// Throttle function implementation
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func(...args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Example usage of throttle
const logMessage = (message) => {
    console.log(message, new Date().toLocaleTimeString());
};

// Throttled version of the logMessage function
const throttledLogMessage = throttle(logMessage, 2000);

// Simulate rapid function calls
setInterval(() => {
    throttledLogMessage('Throttled message');
}, 500);

// setInterval is used to call throttledLogMessage every 500ms, but due to throttling, the message will only be logged every 2 seconds.
function checkPalindrome(str) {
    const len = str.length;
    for(let i = 0; i < len / 2; i++) {
        if(str[i] === str[len - i - 1]) {
            return true;
        }
    }
    return false;
    
}

console.log(checkPalindrome('madam'))
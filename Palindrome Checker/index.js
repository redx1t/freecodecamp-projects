function palindrome(str) {
    //regex is to remove any special characters, convert to lowercase
    // second section reverses and compares the string
    return ((str.toLowerCase().replace(/\W|_/g, '')) === str.toLowerCase().replace(/\W|_/g, '').split('').reverse().join(''));
}

// simple tests to confirm its working
console.log(palindrome("eye"));
//true
console.log(palindrome("A man, a plan, a canal. Panama"));
//true
console.log(palindrome("not a palindrome"));
//false
console.log(palindrome("0_0 (: /-\ :) 0-0"));
//true
console.log(palindrome("five|\_/|four"));
//false
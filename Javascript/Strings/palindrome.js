//<---Palindrome (Words that read the same forwards and backwards)--->

function palindrome(word) {

    // Convert the word to lowercase (remove spaces and non-alphanumeric characters)
    const cleanedWord = word.toLowerCase().replace(/[^a-z0-9]/g, '');

    // Reverse the word
    const reversedWord = cleanedWord.split('').reverse().join('');

    // Check if the word is equal to its reversed version
    return cleanedWord === reversedWord;
}

console.log(palindrome("radar"));                           // true
console.log(palindrome("hello"));                           // false
console.log(palindrome("ana"));                             // true
console.log(palindrome("A man, a plan, a canal, Panama"));  // true

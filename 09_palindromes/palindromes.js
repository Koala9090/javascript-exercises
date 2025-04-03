const palindromes = function (str) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

    const cleanedString = str
    .toLowerCase()
    .split('')
    .filter((x) => alphanumerical.includes(x))
    .join('');
    const reversedString = cleanedString.split('').reverse().join('');
    
    return reversedString === cleanedString
}

// Do not edit below this line
module.exports = palindromes;

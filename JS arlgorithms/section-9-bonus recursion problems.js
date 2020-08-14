// =========================================
// Reverse
// =========================================

function reverse(str){
    if(str.length == 1) return str[0]
    return str[str.length - 1] + reverse(str.substring(0, str.length - 1))
}

// console.log(reverse('awesome')) // 'emosewa'
// console.log(reverse('rithmschool')) // 'loohcsmhtir'


// =========================================
// Is Palindrome
// =========================================


function isPalindrome(str){
    if(str.length < 2) return true
    let first = str[0]
    let last = str[str.length - 1]
    if(first != last) return false
    return isPalindrome(str.substring(1,str.length - 1))
}

console.log(isPalindrome('awesome')) // false
console.log(isPalindrome('foobar')) // false
console.log(isPalindrome('tacocat')) // true
console.log(isPalindrome('amanaplanacanalpanama')) // true
console.log(isPalindrome('amanaplanacanalpandemonium')) // false


// =========================================
// Some Recursive
// =========================================

function someRecursive(arr, cb){
    if(arr.length == 0) return false
    if(cb(arr[0])) return true
    return someRecursive(arr.slice(1), cb)
}

// SAMPLE INPUT / OUTPUT
const isOdd = val => val % 2 !== 0;

// console.log(someRecursive([1,2,3,4], isOdd)) // true
// console.log(someRecursive([4,6,8,9], isOdd)) // true
// console.log(someRecursive([4,6,8], isOdd)) // false
// console.log(someRecursive([4,6,8], val => val > 10)) // false

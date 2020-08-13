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


function isPalindrome(str, result = true){
    if(str.length < 2) {
        console.log(str, result)
        return result
    }
    let first = str[0]
    let last = str[str.length - 1]
    first != last ? result = false : null
    console.log(first, last, first == last ? true : false, result)
    return result + isPalindrome(str.substring(1, str.length - 1), result)
}

console.log(isPalindrome('awesome')) // false
console.log(isPalindrome('foobar')) // false
console.log(isPalindrome('tacocat')) // true
console.log(isPalindrome('amanaplanacanalpanama')) // true
console.log(isPalindrome('amanaplanacanalpandemonium')) // false
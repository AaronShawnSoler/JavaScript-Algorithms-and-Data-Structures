// =========================================
// Reverse
// =========================================

function reverse(str){
    // return last letter to flip
    if(str.length == 1) return str[0]

    // return last letter and whatever is left in the string
    return str[str.length - 1] + reverse(str.substring(0, str.length - 1))
}

// console.log(reverse('awesome')) // 'emosewa'
// console.log(reverse('rithmschool')) // 'loohcsmhtir'


// =========================================
// Is Palindrome
// =========================================


function isPalindrome(str){
    // if there is 1 or 0 letters then its true
    if(str.length < 2) return true

    // if letters at the ends dont match its not a palindrome
    let first = str[0]
    let last = str[str.length - 1]
    if(first != last) return false

    // check next two numbers
    return isPalindrome(str.substring(1,str.length - 1))
}

// console.log(isPalindrome('awesome')) // false
// console.log(isPalindrome('foobar')) // false
// console.log(isPalindrome('tacocat')) // true
// console.log(isPalindrome('amanaplanacanalpanama')) // true
// console.log(isPalindrome('amanaplanacanalpandemonium')) // false


// =========================================
// Some Recursive
// =========================================

function someRecursive(arr, cb){
    // if theres no more elements then cb didnt return true on any element
    if(arr.length == 0) return false

    // return true if cb is valid
    if(cb(arr[0])) return true

    // check next element
    return someRecursive(arr.slice(1), cb)
}

// SAMPLE INPUT / OUTPUT
const isOdd = val => val % 2 !== 0;

// console.log(someRecursive([1,2,3,4], isOdd)) // true
// console.log(someRecursive([4,6,8,9], isOdd)) // true
// console.log(someRecursive([4,6,8], isOdd)) // false
// console.log(someRecursive([4,6,8], val => val > 10)) // false


// =========================================
// Flatten Array
// =========================================

function flatten(arr){

    let store = []
    let flat = true

    // if element is a number just add it to our store else merge array with current store
    for(let index in arr) {
        if(Array.isArray(arr[index])) {
            // if we have to merge we can assume the array isn't flat yet
            flat = false
            store = store.concat(arr[index])
        } else {
            store.push(arr[index])
        }
    }

    // we looped over every element and didn't have to merge so we know we are flat
    if(flat == true) return store

    return flatten(store)
}

// console.log(flatten([1, 2, 3, [4, 5] ])) // [1, 2, 3, 4, 5]
// console.log(flatten([1, [2, [3, 4], [[5]]]])) // [1, 2, 3, 4, 5]
// console.log(flatten([[1],[2],[3]])) // [1,2,3]
// console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])) // [1,2,3]


// =========================================
// Capitalize first
// =========================================

function capitalizeFirst (arr) {
    // if array is empty theres no more letters to check
    if(arr.length == 0) return arr

    // change elements first letter to capital
    arr[0] = arr[0][0].toUpperCase() + arr[0].slice(1)

    // move on to next element
    return [arr[0]].concat(capitalizeFirst(arr.slice(1)))
}

// console.log(capitalizeFirst(['car','taco','banana'])); // ['Car','Taco','Banana']
// console.log(capitalizeFirst(['taylor','carlee','aaron'])); // ['Car','Taco','Banana']


// =========================================
// Nested even sum
// =========================================

function nestedEvenSum (obj) {

    let sum = 0
    let nested = []

    // if value is even add it to sum else if its an object add to nested array
    Object.keys(obj).forEach(key => {
        if(obj[key] % 2 == 0) {
            sum += obj[key]
        } else if(typeof obj[key] == "object") {
            nested.push(obj[key])
        }
    })

    // check nested objects for even numbers
    nested.forEach(obj => sum += nestedEvenSum(obj))

    return sum
}

var obj1 = {
    outer: 2,
    obj: {
        inner: 2,
        otherObj: {
            superInner: 2,
            notANumber: true,
            alsoNotANumber: "yup"
        }
    }
}

var obj2 = {
    a: 2,
    b: {b: 2, bb: {b: 3, bb: {b: 2}}},
    c: {c: {c: 2}, cc: 'ball', ccc: 5},
    d: 1,
    e: {e: {e: 2}, ee: 'car'}
};

var obj3 = {
    a: 8,
    b: {
        c: 2,
        d: {
            e: 4
        }
    }
}

// console.log(nestedEvenSum(obj1)); // 6
// console.log(nestedEvenSum(obj2)); // 10
// console.log(nestedEvenSum(obj3)); // 


// =========================================
// Capitalize Words
// =========================================

function capitalizeWords(arr) {
    // if array is empty there's no more words to check
    if(arr.length == 0) return arr

    // set word to uppercase
    arr[0] = arr[0].toUpperCase()

    // move to next word
    return [arr[0]].concat(capitalizeWords(arr.slice(1)))
}

// let words = ['i', 'am', 'learning', 'recursion'];
// console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']


// =========================================
// Stringify Numbers
// =========================================

function stringifyNumbers(obj) {

    let nested = []

    // if object is number convert to string else push objects to nested array
    Object.keys(obj).forEach(key => {
        if(typeof obj[key] == "number") {
            obj[key] = obj[key].toString()
        } else if(typeof obj[key] == "object") {
            nested.push(obj[key])
        }
    })

    // check for numbers in nested objects
    nested.forEach(obj => stringifyNumbers(obj))
    
    return obj
}

let obj4 = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    },
    a: {
        b: 3
    }
}

// console.log(stringifyNumbers(obj4)) 


// =========================================
// Collect Strings
// =========================================

function collectStrings(obj) {

    let strings = []
    let nested = []
    Object.keys(obj).forEach(key => {
        if(typeof obj[key] == "string") {
            strings.push(obj[key])
        } else if(typeof obj[key] == "object") {
            nested.push(obj[key])
        }
    })

    nested.forEach(obj => strings = strings.concat(collectStrings(obj)))
    return strings
}

const obj5 = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

console.log(collectStrings(obj5))
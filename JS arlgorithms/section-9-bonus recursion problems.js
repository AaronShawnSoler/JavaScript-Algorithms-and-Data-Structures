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

// console.log(isPalindrome('awesome')) // false
// console.log(isPalindrome('foobar')) // false
// console.log(isPalindrome('tacocat')) // true
// console.log(isPalindrome('amanaplanacanalpanama')) // true
// console.log(isPalindrome('amanaplanacanalpandemonium')) // false


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


// =========================================
// Flatten Array
// =========================================

function flatten(arr){

    let store = []
    let flat = true
    for(let index in arr) {
        if(Array.isArray(arr[index])) {
            flat = false
            store = store.concat(arr[index])
        } else {
            store.push(arr[index])
        }
    }
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
    if(arr.length == 0) return arr
    arr[0] = arr[0][0].toUpperCase() + arr[0].slice(1)
    return [arr[0]].concat(capitalizeFirst(arr.slice(1)))
}

// console.log(capitalizeFirst(['car','taco','banana'])); // ['Car','Taco','Banana']
// console.log(capitalizeFirst(['taylor','carlee','aaron'])); // ['Car','Taco','Banana']


// =========================================
// Nested even sum
// =========================================

function nestedEvenSum (obj) {
    if(typeof obj != "object") return obj % 2 == 0 ? obj : 0

    let sum = 0
    let nested = []
    Object.keys(obj).forEach(key => {
        if(obj[key] % 2 == 0) {
            sum += obj[key]
        } else if(typeof obj[key] == "object") {
            nested.push(obj[key])
        }
    })

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
    if(arr.length == 0) return arr
    arr[0] = arr[0].toUpperCase()
    return [arr[0]].concat(capitalizeWords(arr.slice(1)))
}

// let words = ['i', 'am', 'learning', 'recursion'];
// console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']


// =========================================
// Stringify Numbers
// =========================================

function stringifyNumbers(obj) {

    let nested = []
    Object.keys(obj).forEach(key => {
        if(typeof obj[key] == "number") {
            obj[key] = obj[key].toString()
        } else if(typeof obj[key] == "object") {
            nested.push(obj[key])
        }
    })

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

// =========================================
// Power
// =========================================

function power(num, pow){
    if(pow == 0) return 1
    return 2 * power(num, pow - 1)
}

// console.log(power(2,0))  // 1
// console.log(power(2,2))  // 4
// console.log(power(2,4))  // 16


// =========================================
// Factorial
// =========================================

function factorial(num) {
    if(num == 1) return 1
    return num * factorial(num-1)
}

// console.log(factorial(1)) // 1
// console.log(factorial(2)) // 2
// console.log(factorial(4)) // 24
// console.log(factorial(7)) // 5040


// =========================================
// Product of Array
// =========================================

function factorial(arr) {
    if(arr.length == 1) return arr[0]
    arr[1] *= arr[0]
    return factorial(arr.slice(1))
}

console.log(factorial([1,2,3]))  // 6
console.log(factorial([1,2,3,10]))  // 60
console.log(factorial([1,2,4,10,5]))  // 400

// =========================================
// Power
// =========================================

function power(num, pow){
    // anything with a power of 0 is 1
    if(pow == 0) return 1

    // multiply the next number in the power
    return num * power(num, pow - 1)
}

// console.log(power(2,0))  // 1
// console.log(power(2,2))  // 4
// console.log(power(2,4))  // 16
// console.log(power(3,2))  // 9


// =========================================
// Factorial
// =========================================

function factorial(num) {
    // factorial of 1 is 1
    if(num == 1) return 1

    // take curent num and multiply by the number previous to it
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
    // if last number in array return it
    if(arr.length == 1) return arr[0]

    // multiply next number with number we are currently on
    arr[1] *= arr[0]

    // remove first number and move onto next number
    return factorial(arr.slice(1))
}

// console.log(factorial([1,2,3]))  // 6
// console.log(factorial([1,2,3,10]))  // 60
// console.log(factorial([1,2,4,10,5]))  // 400


// =========================================
// Recursive Range
// =========================================

function recursiveRange(num) {
    // when we hit 0 there's no more to add
    if(num == 0) return 0

    // add curr num with the one before it
    return num + recursiveRange(num - 1)
}

// console.log(recursiveRange(6)) // 21
// console.log(recursiveRange(10)) // 55 


// =========================================
// Fib
// =========================================


function fib(num){
    // if fib is less than or equal to 2 just return 1
    if(num <= 2) return 1

    // return sum of previous 2 numbers
    return fib(num - 1) + fib(num - 2)
}

// console.log(fib(4)) // 3
// console.log(fib(10)) // 55
// console.log(fib(28)) // 317811
// console.log(fib(35)) // 9227465
//==========================================
// Frequency Counter - sameFrequency
//==========================================

function sameFrequency(num1, num2) {
    // Check if numbers are the same length
    num1 = num1.toString().split('')
    num2 = num2.toString().split('')
    if(num1.length != num2.length) {
        return false
    }

    // Storage
    let cache = {}

    // Count items
    num1.forEach(num => cache[num] ? cache[num] += 1 : cache[num] = 1)

    // Check if they have the same ammount of items
    for(let num in num2){
        if(!cache[num2[num]]) {
            return false
        } else {
            cache[num2[num]] -= 1
            if(cache[num2[num]] < 0) {
                return false
            }
        }
    }

    return true
}

sameFrequency(182, 281) // true
sameFrequency(34, 14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22, 222) // false


//==========================================
// Frequency Counter / Multiple Pointers - areThereDuplicates
//==========================================

function areThereDuplicates() {

    let cache = new Set()

    const args = Array.from(arguments)

    // check if items already exists in args
    for(let arg in args) {
        if(cache.has(args[arg])) {
            return true
        } else {
            cache.add(args[arg])
        }
    }

    return false
}

areThereDuplicates(1,2,3) // false
areThereDuplicates(1,2,2) // true
areThereDuplicates('a','b','c','a') // true


//==========================================
// Multiple Pointers - averagePair
//==========================================

function averagePair(arr, ave) {
    // if less than 2 there's no pair
    if(arr.length < 2) {
        return false
    }

    // start from maxium and minium values
    let start = 0
    let end = arr.length - 1

    // if average is lower increase start vice versas for end
    while(start < end) {
        let average = (arr[start] + arr[end]) / 2
        if(average == ave) return true
        average > ave ? end -= 1 : start += 1
    }

    return false
}

averagePair([1,2,3], 2.5) // true
averagePair([1,3,3,5,6,7,10,12,19], 8) // true
averagePair([-1,0,3,4,5,6], 4.1) // false
averagePair([], 4) // false


//==========================================
// Multiple Pointers - isSubsequence
//==========================================

function isSubsequence(sub, str) {
    let currChar = 0
    
    for(let index in str) {
        if(str[index] == sub[currChar]) currChar += 1
    }
    
    if(currChar < sub.length) {
        return false
    } else {
        return true
    }
}

isSubsequence('hello', 'hello world') // true
isSubsequence('sing', 'sting') // true
isSubsequence('abc', 'abracadabra') // true
isSubsequence('abc', 'acb') // false


//==========================================
// Sliding Window - maxSubarraySum
//==========================================

function maxSubarraySum(arr, size) {
    if(arr.length < size) return null

    let start = 0
    let sum = 0
    let max

    for(let index = 0; index < arr.length; index++) {
        let diff = index - start + 1
        sum += arr[index]
        if(diff > size) {
            sum -= arr[start]
            start += 1
            if(sum > max) max = sum
        } else if(diff == size) max = sum
    
    }

    return max
}

maxSubarraySum([100,200,300,400], 2) // 700
maxSubarraySum([1,4,2,10,23,3,1,0,20], 4) // 39
maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1], 2) // 5
maxSubarraySum([2,3], 3) // null
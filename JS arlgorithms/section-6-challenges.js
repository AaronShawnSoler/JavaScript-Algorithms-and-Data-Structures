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
    if(arr.length < 2) {
        return false
    }

    let start = 0
    let end = arr.length - 1

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
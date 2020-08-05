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

    const args = Array.from(arguments)
    args.forEach(arg => console.log(arg))
}
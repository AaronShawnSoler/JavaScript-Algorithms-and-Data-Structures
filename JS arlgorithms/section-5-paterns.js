// Frequency Counter - validAnagram

function validAnagram(str1, str2) {

    // no need to check if strings arent same length
    if(str1.length != str2.length) {
        return false
    }

    // storatge for counters
    let cache1 = {}
    let cache2 = {}

    // counter
    function counter(cache, str) {
        for(let char of str) {
            if(cache[char]) {
                cache[char] += 1
            } else {
                cache[char] = 1
            }
        }
    }

    counter(cache1, str1)
    counter(cache2, str2)

    // checking if each cache has same amount of each item
    for(const prop in cache1) {
        if(cache1[prop] !== cache2[prop]) {
            return false
        }
    }

    return true
}

validAnagram('', '') // true
validAnagram('aaz', 'zza') // false
validAnagram('anagram', 'nagaram') // true
validAnagram('rat', 'car') // false
validAnagram('awesome', 'awesom') // false
validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana') // false
validAnagram('qwerty', 'qeywrt') // true
validAnagram('texttwisttime', 'timetwisttext') // true
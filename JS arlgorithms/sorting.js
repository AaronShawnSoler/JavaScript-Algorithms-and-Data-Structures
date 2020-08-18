// =====================================================
// Bubble Sort
// =====================================================

function bubbleSort(arr) {
    let swapped = false

    // swap function
    function swap() {
        swapped = false

        // scan array and see if previous element is greater than next element
        // if so swap
        for(let index = 0; index < arr.length - 1; index ++) {
            // (Flip sign to sort descending)
            if(arr[index] > arr[index + 1]) {
                [arr[index], arr[index + 1]] = [arr[index + 1], arr[index]]
                swapped = true
            }
        }
    }

    // run once and see if its already sorted
    // if its not sorted we keep swapping until there's no swaps
    do {
        swap()
    } while(swapped == true) swap()
    
    return arr
}

// console.log(bubbleSort([2,1,5,3,4,0,-5,-1,-2,-4,-3])) // [-5,-4,-3,-2,-1,0,1,2,3,4,5]

// =====================================================
// Selection Sort
// =====================================================

function selectionSort(arr) {
    
    // sort each item
    for(let sort = 0; sort < arr.length; sort++) {
        let smallest = sort

        // find smallest item after curr sorted item
        for(let index = sort + 1; index < arr.length; index++) {
            if(arr[index] < arr[smallest]) {
                smallest = index
            }
        }
        
        // if curr sorted item isnt the smallest swap
        if(sort != smallest) {
            let temp = arr[sort]
            arr[sort] = arr[smallest]
            arr[smallest] = temp
        }
    }

    return arr
}

// console.log(selectionSort([2,1,5,3,4,0,-5,-1,-2,-4,-3])) // [-5,-4,-3,-2,-1,0,1,2,3,4,5]


// =====================================================
// Insertion Sort
// =====================================================

function insertionSort(arr) {
    // loop over array starting at 1
    for(let sort = 1; sort < arr.length; sort++) {
        // scan backwards and check if item to sort is less than previous element
        for(let index = sort; index > 0; index--) {
            // if curr element is less than previous element swap them
            if(arr[index] < arr[index - 1]){
                [arr[index], arr[index - 1]] = [arr[index - 1], arr[index]]
            }
        }
    }

    return arr
} 

// console.log(insertionSort([2,1,5,3,4,0,-5,-1,-2,-4,-3])) // [-5,-4,-3,-2,-1,0,1,2,3,4,5]


// =====================================================
// Merge Sort
// =====================================================

function merge(arr1, arr2) {
    let a = 0
    let b = 0
    let newArr = []

    while(newArr.length != arr1.length + arr2.length) {

        if(arr1[a] < arr2[b]) {
            newArr.push(arr1[a])
            a++
        } else if(arr2[b] < arr1[a]) {
            newArr.push(arr2[b])
            b++
        }

        if(a == arr1.length) newArr = newArr.concat(arr2.slice(b))
        if(b == arr2.length) newArr = newArr.concat(arr1.slice(a))
    }

    return newArr
}

// console.log(merge([1,3,5,7],[2,4,6,8])) // [1,2,3,4,5,6,7,8]
// console.log(merge([1,3,5,7],[2,4,6,8,9])) // [1,2,3,4,5,6,7,8]

function mergeSort(arr) {
    // arrays with 0 or 1 elements are sorted so return it
    if(arr.length <= 1) return arr

    // cut array in half
    let mid = arr.length / 2
    let left = arr.slice(0, mid)
    let right = arr.slice(mid, arr.length)

    // merge the two halfs
    return merge(mergeSort(left), mergeSort(right))
}

// console.log(mergeSort([2,1,5,3,4,0,-5,-1,-2,-4,-3])) // [-5,-4,-3,-2,-1,0,1,2,3,4,5]


// =====================================================
// Quick Sort
// =====================================================

function pivotHelper(arr, start = 0, end = arr.length - 1) {
    let pivot = start
    let pivotIndex = pivot

    // if element is less than pivot increase pivotIndex and swap curr element
    for(let index = start; index <= end; index++) {
        if(arr[index] < arr[pivot]) {
            pivotIndex++
            [arr[pivotIndex], arr[index]] = [arr[index], arr[pivotIndex]]
        }
    }

    // swap pivot with pivot index
    [arr[pivot], arr[pivotIndex]] = [arr[pivotIndex], arr[pivot]]

    return pivotIndex
}

// console.log(pivotHelper([2,1,5,3,4,0,-5,-1,-2,-4,-3])) // [-3,1,0,-5,-1,-2,-4,2,5,3,4]

function quickSort(arr, start = 0, end = arr.length - 1) {
    if(start < end) {
        // calculate index of pivot
        let pivot = pivotHelper(arr, start, end)

        // quickSort left and right sides not including pivot
        quickSort(arr, start, pivot - 1)
        quickSort(arr, pivot + 1, end)
    }

    return arr
}

// console.log(quickSort([2,1,5,3,4,0,-5,-1,-2,-4,-3])) // [-5,-4,-3,-2,-1,0,1,2,3,4,5]


// =====================================================
// Radix Sort
// =====================================================

function getDigit(num, place) {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10
}

// console.log(getDigit(1234, 0)) // 4
// console.log(getDigit(1234, 4)) // 0
// console.log(getDigit(4321, 2)) // 3


function digitCount(num) {
    if(num == 0) return 1
    return Math.floor(Math.log10(Math.abs(num))) + 1
}

// console.log(digitCount(1)) // 1
// console.log(digitCount(12)) // 2
// console.log(digitCount(123)) // 3


function mostDigits(arr) {
    let maxDigits = 0
    for(let index in arr) {
        maxDigits = Math.max(maxDigits, digitCount(arr[index]))
    }
    return maxDigits
}

// console.log(mostDigits([1234,56,7])) // 4
// console.log(mostDigits([1,1,11111,1])) // 5
// console.log(mostDigits([12,34,56,78])) // 2


function radixSort(arr) {
    let largestNumber = mostDigits(arr)

    // storage for buckets
    let buckets = {}
    
    // loop over how many digits there are in the biggest number
    for(let place = 0; place <= largestNumber; place++){
        // create buckets with base 10 numbers
        for(let bucket = 0; bucket <= 9; bucket++) buckets[bucket] = []
        // place digit in respective bucket for their current place
        arr.forEach(number => buckets[getDigit(number, place)].push(number))
        
        // wipe array and rebuild it using our buckets
        arr = []
        Object.keys(buckets).forEach(key => arr = arr.concat(buckets[key]))
    }

    return arr
}

/**
 * (NOTE: Only works for positive numbers currently)
 * 
 * In order to get this to work for negatives we need 
 * to create a radix for our negative numbers,
 * reverse that list,
 * and append it to the beginning of our positive radix set.
 */

// console.log(radixSort([211,1456,515,38,4,0,535,14,243,45,3])) // [0, 3, 4, 14, 38, 45, 211, 243, 515, 535, 1456]
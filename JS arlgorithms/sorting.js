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

console.log(mergeSort([2,1,5,3,4,0,-5,-1,-2,-4,-3])) // [-5,-4,-3,-2,-1,0,1,2,3,4,5]
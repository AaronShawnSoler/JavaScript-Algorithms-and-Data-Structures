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

// console.log(bubbleSort([2,1,5,3,4,0,-5,-1,-2,-4,-3])) // [1,2,3,4,5]

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

// console.log(selectionSort([2,1,5,3,4,0,-5,-1,-2,-4,-3])) // [1,2,3,4,5]
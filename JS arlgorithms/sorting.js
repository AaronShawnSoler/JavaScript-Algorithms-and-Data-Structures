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

console.log(bubbleSort([2,1,5,3,4])) // [1,2,3,4,5]
// ==========================================
// Linear Search 
// ==========================================

function linearSearch(arr, target){
    for(let index in arr) {
        if(arr[index] == target) return Number(index)
    }

    return -1
}

// console.log(linearSearch([10,15,20,25,30], 15)) // 1
// console.log(linearSearch([9,8,7,6,5,4,3,2,1,0], 4)) // 5
// console.log(linearSearch([100], 100)) // 0
// console.log(linearSearch([1,2,3,4,5], 6)) // -1
// console.log(linearSearch([9,8,7,6,5,4,3,2,1,0], 10)) // -1
// console.log(linearSearch([100], 200)) // -1


// ==========================================
// Binary Search 
// ==========================================

function binarySearch(arr, target){
    let left = 0
    let right = arr.length - 1

    while(left < right) {
        let center = Math.ceil((left + right) / 2)

        if(arr[left] == target) return left
        if(arr[right] == target) return right

        // if center equals target return index
        // else if center less than target check right half
        // else if center greater than target check left half
        if(arr[center] == target) return center
        if(arr[center] < target) left = center
        if(arr[center] > target) right = center
    }

    // return -1 if target was not found
    return -1
}

// console.log(binarySearch([1,2,3,4,5],2)) // 1
// console.log(binarySearch([1,2,3,4,5],3)) // 2
// console.log(binarySearch([1,2,3,4,5],5)) // 4
// console.log(binarySearch([1,2,3,4,5],6)) // -1
// console.log(binarySearch([5,6,10,13,14,18,30,34,35,37,40,44,64,79,84,86,95,96,98,99],10)) // 2
// console.log(binarySearch([5,6,10,13,14,18,30,34,35,37,40,44,64,79,84,86,95,96,98,99],95)) // 16
// console.log(binarySearch([5,6,10,13,14,18,30,34,35,37,40,44,64,79,84,86,95,96,98,99],100)) // -1
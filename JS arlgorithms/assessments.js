// left branch or right branch
const solution = (arr) => {
    // if length is less than 1 than return ""
    if(arr.length <= 1) return ""
    
    // sum helper function
    function addNodes(index) {
        if(!arr[index] || arr[index] == -1) return 0
        
        let left = 2 * index + 1
        let right = 2 * index + 2
        
        return arr[index] + addNodes(left) + addNodes(right)
    }
    
    // add left and right branches
    let leftSum = addNodes(1)
    let rightSum = addNodes(2)
    
    // if they are equal return ""
    if(leftSum == rightSum) return ""
    
    if(leftSum > rightSum) {
        return "Left"
    } else if(rightSum > leftSum) {
        return "Right"
    }
};

// max
const solution = (numbers) => {
    // Type your solution here
    if(numbers.length == 0) return 0
    
    let max = numbers[0]
    
    for(let index = 0; index < numbers.length; index++) {
        if(numbers[index] > max) max = numbers[index]
    }
    
    return max
};


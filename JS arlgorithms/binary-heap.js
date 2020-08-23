class BinaryHeap {
    constructor() {
        this.heap = []
    }

    insert(val) {
        this.heap.push(val)

        let index = this.heap.length - 1
        let parent = Math.floor((index - 1) / 2)

        while(this.heap[parent] < this.heap[index]) {
            [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]]
            index = parent
            parent = Math.floor((index - 1) / 2)
        }

        return this.heap
    }

    extractMax() {
        // swap root with last element
        [this.heap[0], this.heap[this.heap.length - 1]] = [this.heap[this.heap.length - 1], this.heap[0]]
        // save last element (root) for later
        let retVal = this.heap.pop()

        let parent = 0
        let leftIdx = 2 * parent + 1
        let rightIdx = 2 * parent + 2
        let left = this.heap[leftIdx]
        let right = this.heap[rightIdx]

        //while left or right child is greater than parent
        while(left > this.heap[parent] || right > this.heap[parent]) {
            leftIdx = 2 * parent + 1
            rightIdx = 2 * parent + 2
            left = this.heap[leftIdx]
            right = this.heap[rightIdx]

            // if left and right child are greater
            if(left > this.heap[parent] && right > this.heap[parent]) {
                // swap child that is greater than that other
                if(left > right) {
                    [this.heap[parent], this.heap[leftIdx]] = [this.heap[leftIdx], this.heap[parent]]
                    parent = 2 * parent + 1
                } else {
                    [this.heap[parent], this.heap[rightIdx]] = [this.heap[rightIdx], this.heap[parent]]
                    parent = 2 * parent + 2
                }
            // swap left child if its greater
            } else if(left > this.heap[parent]) {
                [this.heap[parent], this.heap[leftIdx]] = [this.heap[leftIdx], this.heap[parent]]
                parent = 2 * parent + 1
            // swap right child if its greater
            } else if(right > this.heap[parent]) {
                [this.heap[parent], this.heap[rightIdx]] = [this.heap[rightIdx], this.heap[parent]]
                parent = 2 * parent + 2
            }

        }

        return retVal
    }
}

const binaryHeap = new BinaryHeap()

binaryHeap.insert(50)

binaryHeap.insert(10)
binaryHeap.insert(30)

binaryHeap.insert(5)
binaryHeap.insert(0)
binaryHeap.insert(20)
binaryHeap.insert(25)

console.log(binaryHeap.heap)
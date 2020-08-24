class PriorityNode {
    constructor(val, priority) {
        this.val = val
        this.priority = priority
    }
}

class PriorityQueue {
    constructor() {
        this.heap = []
    }

    enqueue(val, priority) {
        const newNode = new PriorityNode(val, priority)
        this.heap.push(newNode)
        this.bubbleUp()
    }

    dequeue() {
        const topPriority = this.heap[0]
        const last = this.heap.pop()
        if(this.heap.length > 0) {
            this.heap[0] = last
            this.sinkDown()
        }
        return topPriority
    }

    bubbleUp() {
        let index = this.heap.length - 1
        const node = this.heap[index]
        while(index > 0) {
            let parentIdx = Math.floor((index - 1) / 2)
            let parent = this.heap[parentIdx]

            if(node.priority >= parent.priority) break

            this.heap[parentIdx] = node
            this.heap[index] = parent
            index = parentIdx
        }
    }

    sinkDown() {
        let index = 0
        const node = this.heap[index]
        
        while(true) {
            const leftIdx = 2 * index + 1
            const rightIdx = 2 * index + 2
            const left = this.heap[leftIdx] ? this.heap[leftIdx].priority : null
            const right = this.heap[rightIdx] ? this.heap[rightIdx].priority : null
            let swap = null

            if(left == null && right == null) break

            if(left < node.priority && left != null && right < node.priority && right != null) {
                left < right ? swap = leftIdx : swap = rightIdx
            } else if(left < node.priority && left != null) {
                swap = leftIdx
            } else if(right < node.priority && right != null) {
                swap = rightIdx
            }

            if(swap == null) break
            [this.heap[index], this.heap[swap]] = [this.heap[swap], this.heap[index]]
            index = swap
        }
    }

}

const priorityQueue = new PriorityQueue()

priorityQueue.enqueue('hello', 4)

priorityQueue.enqueue('world', 8)
priorityQueue.enqueue('team', 2)

priorityQueue.enqueue('lead', 6)
priorityQueue.enqueue('aaron', 10)
priorityQueue.enqueue('soler', 0)
priorityQueue.enqueue('school', 12)
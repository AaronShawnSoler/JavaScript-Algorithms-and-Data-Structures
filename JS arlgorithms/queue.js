class QNode {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class Queue {
    constructor() {
        this.first = null
        this.last = null
        this.size = 0
    }

    enqueue(val) {
        const node = new QNode(val)

        if(this.size == 0) {
            this.first = node
            this.last = node
        } else {
            this.last.next = node
            this.last = node
        }

        this.size++

        return this.size
    }

    dequeue() {
        if(this.size == 0) return null

        let retVal = this.first
        this.first = this.first.next

        this.size--
        if(this.size == 0) {
            this.first = null
            this.last = null
        }

        return retVal.val
    }
}

let queue = new Queue()
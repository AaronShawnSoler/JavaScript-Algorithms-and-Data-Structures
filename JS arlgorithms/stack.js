class SNode {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class Stack {
    constructor() {
        this.first = null
        this.last = null
        this.size = 0
    }

    push(val) {
        const node = new SNode(val)

        // if size is 0 create first node else add onto top of stack
        if(this.size == 0) {
            this.first = node
            this.last = node
        } else {
            let last = this.first
            this.first = node
            this.first.next = last
        }

        this.size++

        return this.size
    }

    pop() {
        if(this.size == 0) return null

        var retVal = this.first

        // remove from top of stack
        if(this.first == this.last) this.last = null
        this.first = this.first.next
        this.size--

        return retVal.val
    }
}

let stack = new Stack()
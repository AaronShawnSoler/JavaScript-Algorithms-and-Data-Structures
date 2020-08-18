class DNode {
    constructor(val) {
        this.val = val
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    print() {
        let curr = this.head
        while(curr) {
            console.log(curr)
            curr = curr.next
        }
    }

    push(val) {
        let node = new DNode(val)

        // if length is 0 add first node else at onto the tail
        if(this.length == 0) {
            this.head = node
            this.tail = this.head
        } else {
            this.tail.next = node
            node.prev = this.tail
            this.tail = node
        }

        // increase length
        this.length++

        return this
    } 

    pop() {
        // if length is 0 there are no nodes
        if(this.length == 0) return undefined

        let retVal = this.tail

        // if length is 1 get rid of last node else remove end node
        if(this.length == 1) {
            this.head = null
            this.tail = null
        } else {
            this.tail = retVal.prev
            this.tail.next = null
            retVal.prev = null
        }
        
        // reduce length
        this.length--
        return retVal
    }

    shift() {
        // if length is 0 there are no nodes
        if(this.length == 0) return undefined

        let retVal = this.head

        // if length is 1 get rid of last node else remove start node
        if(this.length == 1) {
            this.head = null
            this.tail = null
        } else {
            this.head = retVal.next
            this.head.prev = null
            retVal.next = null
        }

        // reduce length
        this.length--
        return retVal
    }

    unshift(val) {
        // create node with value
        const node = new DNode(val)

        // if length is 0 create first node else add to the start of DLL
        if(this.length == 0) {
            this.head = node
            this.tail = node
        } else {
            node.next = this.head
            this.head.prev = node
            this.head = node
        }

        // increase length
        this.length++

        return this
    }

    get(index = 0) {
        if(index < 0 || index >= this.length) return null

        let mid = Math.round(this.length / 2) - 1
        let counter = index <= mid ? 0 : this.length - 1
        let curr = index <= mid ? this.head : this.tail

        // if index is less <= to middle start from head else start from tail
        if(index <= mid) {
            while(counter < index) {
                counter++
                curr = curr.next
            }
        } else {
            while(counter > index) {
                counter--
                curr = curr.prev
            }
        }

        return curr
    }

    set(index, val) {
        let node = this.get(index)

        if(node) {
            node.val = val
            return true
        }

        return false
    }

    insert(index, val) {
        if(index < 0 || index > this.length) return false

        // insert at start of dll
        if(index == 0) {
            this.unshift(val)
            return true
        }

        // insert at end of dll
        if(index == this.length) {
            this.push(val)
            return true
        }

        // create new node and get node before
        let newNode = new DNode(val)
        let node = this.get(index - 1)

        // connect new node to dll
        newNode.next = node.next
        newNode.prev = node
        node.next.prev = newNode
        node.next = newNode

        // increase length
        this.length++

        return true
    }

    remove(index) {
        if(index < 0 || index >= this.length) return false

        // remove from start
        if(index == 0) return this.shift()

        // remove from end
        if(index == this.length - 1) return this.pop()

        // remove node at index
        let node = this.get(index - 1)
        let retVal = node.next
        node.next = node.next.next
        node.next.prev = node

        // reduce length
        this.length--

        return retVal
    }
}

const dll = new DoublyLinkedList()

dll.push(1)
dll.push(2)
dll.push(3)
dll.push(4)
dll.push(5)

dll.print()
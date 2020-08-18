class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class SinglyLinkedList {
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

        // create new node with value
        const node = new Node(val)

        // if head doesn't exist create it else just add after tail
        if(this.head == null) {
            this.head = node
            this.tail = this.head
        } else {
            this.tail.next = node
            this.tail = node
        }

        // increase length
        this.length++
        
        return this
    }

    pop() {
        if(this.head == null) return undefined

        // find second to last node
        let curr = this.head
        let newTail = curr
        while(curr.next) {
            newTail = curr
            curr = curr.next
        }

        // set new tail and remove last node
        this.tail = newTail
        this.tail.next = null

        // reduce length and if length is 0 remove head and tail
        this.length--
        if(this.length == 0) {
            this.head = null
            this.tail = null
        }

        return curr
    }

    shift() {
        if(this.head == null) return undefined

        // get head node and set new head to next
        let retVal = this.head
        this.head = this.head.next

        // reduce length and if length is 0 remove head and tail
        this.length--
        if(this.length == 0) {
            this.head = null
            this.tail = null
        }

        return retVal
    }

    unshift(val) {

        // create new node with value
        const node = new Node(val)

        // if head doesn't exist set head and tail to new node else just set a new head
        if(this.head == null) {
            this.head = node
            this.tail = node
        } else {
            node.next = this.head
            this.head = node
        }

        // increase length
        this.length++

        return this
    }

    get(index) {
        if(index < 0 || index >= this.length) return null
        let counter = 0
        let curr = this.head
        while(counter < index) {
            counter++
            curr = curr.next
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
        if(index == 0) {
            this.unshift(val)
            return true
        }
        if(index == this.length) {
            this.push(val)
            return true
        }

        let newNode = new Node(val)
        let node = this.get(index - 1)
        
        newNode.next = node.next
        node.next = newNode

        this.length++
        
        return true
    }

    remove(index) {
        if(index < 0 || index >= this.length) return false
        if(index == 0) return this.shift()
        if(index == this.length - 1) return this.pop()

        let node = this.get(index - 1)
        let retVal = node.next
        node.next = node.next.next
        this.length--

        return retVal
    } 

    reverse() {
        let next = null
        let prev = null
        let node = this.head
        
        // reverse
        for(let i = 0; i < this.length; i++) {
            next = node.next
            node.next = prev
            prev = node
            node = next
        }
        
        // swap head and tail
        [this.head, this.tail] = [this.tail, this.head]
    }
}

const list = new SinglyLinkedList()
list.push(1)
list.push(2)
list.push(3)
list.push(4)

list.reverse()
list.print()
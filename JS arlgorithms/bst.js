class BTNode {
    constructor(val) {
        this.val = val
        this.count = 1
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insert(val) {
        const newNode = new BTNode(val)

        if(!this.root) {
            this.root = newNode
        } else {
            let curr = this.root

            while(true) {
                if(val > curr.val) {
                    if(curr.right) {
                        curr = curr.right
                    } else {
                        curr.right = newNode
                        return newNode
                    }
                } else if(val < curr.val) {
                    if(curr.left) {
                        curr = curr.left
                    } else {
                        curr.left = newNode
                        return newNode
                    }
                } else {
                    curr.count++
                    return newNode
                }
            }
        }
    }

    find(val) {
        if(!this.root) {
            return undefined
        } else {
            let curr = this.root

            while(true) {
                if(val == curr.val) return true

                if(val > curr.val) {
                    if(curr.right) {
                        curr = curr.right
                    } else {
                        return false
                    }
                } else if(val < curr.val) {
                    if(curr.left) {
                        curr = curr.left
                    } else {
                        return false
                    }
                }
            }
        }
    }

    bfs() {
        if(!this.root) return undefined

        const q = new Queue()
        q.enqueue(this.root)

        let visited = []

        while(q.size > 0) {
            let node = q.dequeue()
            if(node.left) q.enqueue(node.left)
            if(node.right) q.enqueue(node.right)
            visited.push(node.val)
        }

        return visited
    }
}

const btree = new BinarySearchTree()

btree.insert(10)

btree.insert(5)
btree.insert(20)

btree.insert(1)
btree.insert(6)
btree.insert(15)
btree.insert(21)
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
                        return newNodea
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
}

const btree = new BinarySearchTree()
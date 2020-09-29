class Graph {
    constructor() {
        this.adjList = {}
    }

    addVertex(val) {
        this.adjList[val] = []
    }

    addEdge(v1, v2, weight) {
        this.adjList[v1].push({node: v2, weight})
        this.adjList[v2].push({node: v1, weight})
    }

    removeEdge(v1, v2) {
        this.adjList[v1] = this.adjList[v1].filter(v => v.node !== v2)
        this.adjList[v2] = this.adjList[v2].filter(v => v.node !== v1)
    }

    removeVertex(vertex) {
        while(this.adjList[vertex].length) {
            const adjVertex = this.adjList[vertex].pop()
            this.removeEdge(vertex, adjVertex.node)
        }

        delete this.adjList[vertex]
    }

    dfsRecursive(start) {
        let path = []
        let visited = {}

        let traverse = (v) => {
            if(!this.adjList[v]) return null
            visited[v] = true
            path.push(v)
            this.adjList[v].forEach(vert => {if(!visited[vert.node]) traverse(vert.node)})
        }
        traverse(start)

        return path
    }

    dfsIterative(start) {
        let path = []
        let visited = {}
        let s = new Stack()

        s.push(start)

        while(s.size > 0) {
            let vert = s.pop()
            if(!visited[vert]) {
                path.push(vert)
                visited[vert] = true
                this.adjList[vert].forEach(v => s.push(v.node))
            }
        }

        return path
    }

    bfs(start) {
        let q = new Queue()
        let path = []
        let visited = {}

        q.enqueue(start)
        visited[start] = true

        while(q.size > 0) {
            let vert = q.dequeue()
            path.push(vert)
            this.adjList[vert].forEach(v => {
                if(!visited[v.node]) {
                    visited[v.node] = true
                    q.enqueue(v.node)
                }
            })
        }

        return path
    }

    dijkstra(start, end) {
        const priority = new PriorityQueue()
        const distances = {}
        const previous = {}
        let path = []
        let smallest

        // builds initial state
        for(let key in this.adjList) {
            if(key == start) {
                distances[key] = 0
                priority.enqueue(key, 0)
            } else {
                distances[key] = Infinity
                priority.enqueue(key, Infinity)
            }
            previous[key] = null
        }

        // while there are items in priority queue
        while(priority.heap.length) {
            smallest = priority.dequeue().val
            if(smallest == end) {
                while(previous[smallest]) {
                    path.push(smallest)
                    smallest = previous[smallest]
                }
            }

            if(smallest || distances[smallest] != Infinity) {
                for(let neighbor in this.adjList[smallest]) {
                    // find neighbor
                    let nextNode = this.adjList[smallest][neighbor]
                    // calculate new distance to neighbor
                    let distFromStart = distances[smallest] + nextNode.weight
                    let nextNeighbor = nextNode.node

                    if(distFromStart < distances[nextNeighbor]) {
                        // updating new smallest distance
                        distances[nextNeighbor] = distFromStart
                        // updating previous
                        previous[nextNeighbor] = smallest
                        // enqueue with new priority (weight)
                        priority.enqueue(nextNeighbor, distFromStart)
                    }
                }
            }
        }
        return path
    }
}

const graph = new Graph()

graph.addVertex('a')
graph.addVertex('b')
graph.addVertex('c')
graph.addVertex('d')
graph.addVertex('e')
graph.addVertex('f')

graph.addEdge('a', 'b', 4)
graph.addEdge('a', 'c', 2)
graph.addEdge('b', 'e', 3)
graph.addEdge('c', 'd', 2)
graph.addEdge('d', 'e', 3)
graph.addEdge('d', 'f', 1)
graph.addEdge('c', 'f', 4)
graph.addEdge('e', 'f', 1)

console.log(graph.adjList)

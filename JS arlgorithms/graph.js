class Graph {
    constructor() {
        this.adjList = {}
    }

    addVertex(val) {
        this.adjList[val] = []
    }

    addEdge(v1, v2) {
        this.adjList[v1].push(v2)
        this.adjList[v2].push(v1)
    }

    removeEdge(v1, v2) {
        this.adjList[v1] = this.adjList[v1].filter(v => v !== v2)
        this.adjList[v2] = this.adjList[v2].filter(v => v !== v1)
    }

    removeVertex(vertex) {
        while(this.adjList[vertex].length) {
            const adjVertex = this.adjList[vertex].pop()
            this.removeEdge(vertex, adjVertex)
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
            this.adjList[v].forEach(vert => {if(!visited[vert]) traverse(vert)})
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
                this.adjList[vert].forEach(v => s.push(v))
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
                if(!visited[v]) {
                    visited[v] = true
                    q.enqueue(v)
                }
            })
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

graph.addEdge('a', 'b')
graph.addEdge('a', 'c')
graph.addEdge('b', 'd')
graph.addEdge('c', 'e')
graph.addEdge('d', 'e')
graph.addEdge('d', 'f')
graph.addEdge('e', 'f')

console.log(graph.adjList)
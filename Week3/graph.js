class Graph {
    constructor() {
        this.graph = {} // Initialize an empty graph
    }

    addVertex(vertex) {
        if (!this.graph[vertex]) {
            this.graph[vertex] = [] // Add a new vertex with an empty adjacency list
        }
    }

    addEdge(vertex1, vertex2) {
        !this.graph[vertex1] && this.addVertex(vertex1) // Add vertex1 if it doesn't exist
        !this.graph[vertex2] && this.addVertex(vertex2) // Add vertex2 if it doesn't exist

        this.graph[vertex1].push(vertex2) // Add an edge from vertex1 to vertex2
        this.graph[vertex2].push(vertex1) // Add an edge from vertex2 to vertex1
    }

    removeEdge(vertex1, vertex2) {
        if (this.graph[vertex1]) {
            this.graph[vertex1] = this.graph[vertex1].filter(v => v != vertex2) // Remove the edge from vertex1 to vertex2
        }
        if (this.graph[vertex2]) {
            this.graph[vertex2] = this.graph[vertex2].filter(v => v != vertex1) // Remove the edge from vertex2 to vertex1
        }
    }

    removeVertex(vertex) {
        if (!this.graph[vertex]) return
        for (const key in this.graph) {
            this.graph[key] = this.graph[key].filter(v => v != vertex) // Remove the vertex from all adjacency lists
        }
        delete this.graph[vertex] // Delete the vertex
    }

    printGraph() {
        for (const key in this.graph) {
            console.log(key + '->' + this.graph[key].join(',')) // Print the adjacency list of each vertex
        }
    }

    dfs() {
        let visited = new Set()
        let graph = this.graph
        function search(node) {
            console.log(node)
            visited.add(node)
            for (let n of graph[node]) {
                if (!visited.has(n)) {
                    search(n)
                }
            }
        }
        for (let node in graph) {
            if (!visited.has(node)) {
                search(node)
            }
        }
    }

    bfs() {
        let visited = new Set()
        let graph = this.graph
        let queue = []
        function search(node) {
            queue.push(node)
            visited.add(node)
            while (queue.length) {
                const node = queue.shift()

                console.log(node)
                for (let n of graph[node]) {
                    if (!visited.has(n)) {
                        queue.push(n)
                        visited.add(n)
                    }
                }
            }
        }
        for (let n in graph) {
            if (!visited.has(n)) {
                search(n)
            }
        }
    }

    shotestPath(start, souce) {
        const visited = new Set()

        const queue = [{ vertex: start, distence: 0 }]
        visited.add(start)

        while (queue.length) {
            const node = queue.shift()
            if (souce === node.vertex) {
                return node.distence
            }
            for (let n of this.graph[node.vertex]) {
                if (!visited.has(n)) {
                    visited.add(n)
                    queue.push({ vertex: n, distence: node.distence + 1 })
                }
            }
        }
    }
}

// Example Usage:
let graph = new Graph()
graph.addEdge('b', 'v')
graph.addEdge('v', 'h')
graph.addEdge('a', 'q')
graph.addEdge('h', 'a')
// graph.printGraph()
graph.dfs('b')
console.log('=======================')
graph.bfs('b')
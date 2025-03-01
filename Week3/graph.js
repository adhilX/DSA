class Graph {
    constructor(){
        this.graph = {} // Initialize an empty graph
    }

    addVertex(vertex){
        if (!this.graph[vertex]) {
            this.graph[vertex] = [] // Add a new vertex with an empty adjacency list
        }
    }

    addEdge(vertex1,vertex2){
        !this.graph[vertex1] && this.addVertex(vertex1) // Add vertex1 if it doesn't exist
        !this.graph[vertex2] && this.addVertex(vertex2) // Add vertex2 if it doesn't exist

        this.graph[vertex1].push(vertex2) // Add an edge from vertex1 to vertex2
        this.graph[vertex2].push(vertex1) // Add an edge from vertex2 to vertex1
    }

    removeEdge(vertex1, vertex2){
        if (this.graph[vertex1]) {
            this.graph[vertex1] = this.graph[vertex1].filter(v => v != vertex2) // Remove the edge from vertex1 to vertex2
        }
        if (this.graph[vertex2]) {
            this.graph[vertex2] = this.graph[vertex2].filter(v => v != vertex1) // Remove the edge from vertex2 to vertex1
        }
    }

    removeVertex(vertex){
        if(!this.graph[vertex]) return
        for (const key in this.graph) {
            this.graph[key] = this.graph[key].filter(v => v != vertex) // Remove the vertex from all adjacency lists
        }
        delete this.graph[vertex] // Delete the vertex
    }

    printGraph(){
        for (const key in this.graph) {
            console.log(key + '->' + this.graph[key].join(',')) // Print the adjacency list of each vertex
        }
    }

    bfs(start){
        if(!this.graph[start]) return console.log('Invalid starting vertex')

        let visited = new Set() // Set to keep track of visited vertices
        let queue = [start] // Queue for BFS

        while (queue.length) {
            let vertex = queue.shift() // Dequeue a vertex
            if(!visited.has(vertex)){
                console.log(vertex) // Process the vertex
                visited.add(vertex) // Mark the vertex as visited
                queue.push(...this.graph[vertex].filter(v => !visited.has(v))) // Enqueue all unvisited adjacent vertices
            }
        }
    }

    dfs(start){
        if(!this.graph[start]) return console.log('Invalid starting vertex')

        let visited = new Set() // Set to keep track of visited vertices
        let stack = [start] // Stack for DFS

        while (stack.length) {
            let vertex = stack.pop() // Pop a vertex
            if(!visited.has(vertex)){
                console.log(vertex) // Process the vertex
                visited.add(vertex) // Mark the vertex as visited
                stack.push(...this.graph[vertex].filter(v => !visited.has(v))) // Push all unvisited adjacent vertices
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
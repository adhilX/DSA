class Graph {
    constructor(){
        this.graph = {}
    }

    addVertex(vertex){
        if (!this.graph[vertex]) {
            this.graph[vertex] = []
        }
    }

    addEdge(vertex1,vertex2){
        !this.graph[vertex1] && this.addVertex(vertex1)
        !this.graph[vertex2] && this.addVertex(vertex2)

        this.graph[vertex1].push(vertex2)
        this.graph[vertex2].push(vertex1)

    }

    removeEdge(vertex1, vertex2){
        if (this.graph[vertex1] ) {
            this.graph[vertex1] = this.graph[vertex1].filter(v => v!= vertex2)
        }
        if (this.graph[vertex2] ) {
            this.graph[vertex2] = this.graph[vertex2].filter(v => v!= vertex1)
        }
    }

    removeVertex(vertex){
        if(!this.graph[vertex]) return
        for (const key in this.graph) {
            this.graph[key] = this.graph[key].filter(v=> v!= vertex)
        }
        delete this.graph[vertex]
    }

    printGraph(){
        for (const key in this.graph) {
            console.log(key+ '->'+ this.graph.key)
        }
    }

    bfs(start){
        if(!this.graph[start])return console.log('invalide starting ')

            let visited = new Set()
            let queue = [start]

            while (queue.length) {
                let vertex = queue.shift()
                if(!visited.has(vertex)){
                    console.log(vertex)
                    visited.add(vertex)
                    queue.push(...this.graph[vertex].filter( v => !visited.has(v)))
                }
            }
    }

    dfs(start){
        if(!this.graph[start])return console.log('invalide starting ')

            let visited = new Set()
            let stack = [start]

            while (stack.length) {
                let vertex = stack.pop()
                if(!visited.has(vertex)){
                    console.log(vertex)
                    visited.add(vertex)
                    stack.push(...this.graph[vertex].filter( v => !visited.has(v)))
                }
            }
    }
}


let graph = new Graph()
graph.addEdge('b','v')
graph.addEdge('v','h')
graph.addEdge('a','q')
graph.addEdge('h','a')
// graph.printGraph()
graph.dfs('b')
console.log('=======================')
graph.bfs('b')
/* 
CTCI - 4.1
 
Route Between Nodes

Given a directed graph and some nodes S and E, design an algorithm to find 
out where there is a route from S to E.

EXAMPLE
Input: 
Output: 

Input: Two vertices 
Output: Boolean
Constraints: optimize 
Edge Case: no vertex

Time Complexity: O(n) - we could traverse the whole graph and not find the connection

Space Complexity: O(n) - creating a visited has table to keep track of nodes visited


Optimized version:
Time Complexity:
Space Complexity:

*/

class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    // this.adjacencyList[vertex2].push(vertex1);
  }
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    );
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    );
  }
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(adjacentVertex, vertex);
    }
    delete this.adjacencyList[vertex];
  }

  // searches for a path between a stating node and a target end node
  isPath(start, end) {
    let result = false;
    let visited = {};
    const adjacencyList = this.adjacencyList;

    const DFS = (start, end) => {
      if (!start) return null;
      if (start === end) return (result = true);
      visited[start] = true;
      adjacencyList[start].forEach((neighbor) => {
        if (!visited[neighbor]) {
          return DFS(neighbor, end);
        }
      });
    };
    DFS(start, end);

    return result;
  }
}

let graph = new Graph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('S');

graph.addEdge('A', 'E');
graph.addEdge('E', 'B');
graph.addEdge('B', 'C');
graph.addEdge('C', 'D');
graph.addEdge('S', 'D');
graph.addEdge('S', 'A');

let graph2 = new Graph();
graph2.addVertex('A');
graph2.addVertex('B');
graph2.addVertex('C');
graph2.addVertex('D');
graph2.addVertex('E');
graph2.addVertex('S');

graph2.addEdge('A', 'E');
graph2.addEdge('E', 'B');
graph2.addEdge('B', 'C');
graph2.addEdge('C', 'D');
graph2.addEdge('D', 'S');
graph2.addEdge('S', 'A');

let graph3 = new Graph();
graph3.addVertex('A');
graph3.addVertex('B');
graph3.addVertex('C');
graph3.addVertex('D');
graph3.addVertex('E');
graph3.addVertex('S');

graph3.addEdge('A', 'E');
graph3.addEdge('E', 'B');
graph3.addEdge('B', 'C');
graph3.addEdge('C', 'D');
graph3.addEdge('B', 'S');
graph3.addEdge('S', 'A');

// test cases
console.log(graph.isPath('E', 'S') === false);
console.log(graph2.isPath('E', 'S') === true);
console.log(graph3.isPath('E', 'S') === true);

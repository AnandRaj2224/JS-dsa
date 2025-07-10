class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
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
      const v2 = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, v2);
    }
    delete this.adjacencyList[vertex];
  }
}

let flight = new Graph();

flight.addVertex("tokyo");
flight.addVertex("seoul");
flight.addVertex("osaka");
flight.addVertex("kolkata");

flight.addEdge("kolkata", "tokyo");
flight.addEdge("kolkata", "osaka");
flight.addEdge("kolkata", "seoul");
flight.addEdge("seoul", "tokyo");

console.log(flight);

flight.removeVertex("kolkata");

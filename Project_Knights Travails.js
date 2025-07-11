class PriorityQueue {
  constructor(){
    this.values = [];
  }
  enqueue(val, priority) {
    this.values.push({val, priority});
    this.sort();
  };
  dequeue() {
    return this.values.shift();
  };
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  };
}

class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  startChessBoard() {
    let x, y;
    for (x = 0; x <= 7; x++) {
      for (y = 0; y <= 7; y++) {
        const key = `${x},${y}`;
        if (!this.adjacencyList[key]) this.adjacencyList[key] = [];
      }
    }
    // 2. Populate knight moves for each square
    for (let x = 0; x <= 7; x++) {
      for (let y = 0; y <= 7; y++) {
        this.LegalKnightMoves(x, y);
      }
    }
  }
  // to create the edges between chessBoard vertices.
  LegalKnightMoves(x, y) {
    const key = `${x},${y}`;
    const legal = [
                    [x-1,y+2],
                    [x+1,y+2],
                    [x+2,y+1],
                    [x+2,y-1],
                    [x+1,y-2],
                    [x-1,y-2],
                    [x-2,y-1],
                    [x-2,y+1]
                  ];
    for(let i = 0; i <legal.length; i++) {
      if(legal[i][0] >= 0 && legal[i][1] >= 0 && legal[i][0] <= 7 && legal[i][1] <= 7) {
        this.adjacencyList[key].push({ node: `${legal[i][0]},${legal[i][1]}`, weight: 1 });
      }
    }
  }
  Dijkstra(start, finish){
        const nodes = new PriorityQueue();
        const distances = {};
        const previous = {};
        let path = [] //to return at end
        let smallest;
        //build up initial state
        for(let vertex in this.adjacencyList){
            if(vertex === start){
                distances[vertex] = 0;
                nodes.enqueue(vertex, 0);
            } else {
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity);
            }
            previous[vertex] = null;
        }
        // as long as there is something to visit
        while(nodes.values.length){
            smallest = nodes.dequeue().val;
            if(smallest === finish){
                //WE ARE DONE
                //BUILD UP PATH TO RETURN AT END
                while(previous[smallest]){
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            } 
            if(smallest || distances[smallest] !== Infinity){
                for(let neighbor in this.adjacencyList[smallest]){
                    //find neighboring node
                    let nextNode = this.adjacencyList[smallest][neighbor];
                    //calculate new distance to neighboring node
                    let candidate = distances[smallest] + nextNode.weight;
                    let nextNeighbor = nextNode.node;
                    if(candidate < distances[nextNeighbor]){
                        //updating new smallest distance to neighbor
                        distances[nextNeighbor] = candidate;
                        //updating previous - How we got to neighbor
                        previous[nextNeighbor] = smallest;
                        //enqueue in priority queue with new priority
                        nodes.enqueue(nextNeighbor, candidate);
                    }
                }
            }
        }
        return path.concat(smallest).reverse();     
  }
  knightMoves(start, end) {
    const s = `${start[0]},${start[1]}`;
    const e = `${end[0]},${end[1]}`;
    return this.Dijkstra(s, e);
  }
}

let chessBoard = new Graph();
chessBoard.startChessBoard();

let result = chessBoard.knightMoves([3,3],[4,3]);

let moves = result.length-1;

console.log(`You made it in ${moves} moves!  Here's your path:`);
for(const v in result) {
  console.log(`[${result[v]}]`);
}

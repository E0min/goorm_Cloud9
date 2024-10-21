//https://www.acmicpc.net/problem/16398
//Prim 알고리즘

const readline = require('readline');

// readline 인터페이스를 만듭니다.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 질문을 던지고 답변을 받습니다.
let input = [];
rl.on('line', function (line) {
    input.push(line);
}).on('close', function () {

    let V = Number(input[0]); // V는 정점 수
    let edges = input.slice(1).map(line => line.split(" ").map(Number)); // 간선 정보 
    let graph = Array.from({ length: V + 1 }, () => []); // 인접 리스트 생성

    // 간선을 인접 행렬로부터 변환
    for(let i=0;i<edges.length;i++){
        for(let j=0 ; j<edges.length ; j++){
            if(edges[i][j]!=0){
                graph[i+1].push([edges[i][j],j+1]);
            }
        }
    }
    //prim 알고리즘

    let pq = new MinHeap();
    let visited = new Array(V + 1).fill(0);
    let totalWeight = 0;

    pq.insert([0, 1]);

    while (!pq.isEmpty()) {
        let [weight, linkedNode] = pq.extractMin();
        if(visited[linkedNode]==1){continue};
        visited[linkedNode] = 1;
        totalWeight += weight;

        graph[linkedNode].forEach(([w, node]) => {
            if (visited[node] == 0) { // 방문하지 않은 노드에 대해서만
                pq.insert([w, node]);
            }
        })
    }
    console.log(totalWeight);

    // 

    process.exit();
});



class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert([cost, node]) {
        this.heap.push([cost, node]);
        this.bubbleUp();
    }

    bubbleUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[index][0] >= this.heap[parentIndex][0]) break;
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
            index = parentIndex;
        }
    }

    extractMin() {
        const min = this.heap[0];
        const end = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = end;
            this.sinkDown();
        }
        return min;
    }

    sinkDown() {
        let index = 0;
        const length = this.heap.length;
        const element = this.heap[0];

        while (true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIndex < length) {
                leftChild = this.heap[leftChildIndex];
                if (leftChild[0] < element[0]) swap = leftChildIndex;
            }

            if (rightChildIndex < length) {
                rightChild = this.heap[rightChildIndex];
                if (
                    (swap === null && rightChild[0] < element[0]) ||
                    (swap !== null && rightChild[0] < leftChild[0])
                ) {
                    swap = rightChildIndex;
                }
            }

            if (swap === null) break;
            [this.heap[index], this.heap[swap]] = [this.heap[swap], this.heap[index]];
            index = swap;
        }
    }

    isEmpty() {
        return this.heap.length === 0;
    }
}
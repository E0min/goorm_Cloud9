const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
rl.on('line', (line) => {
    input.push(line);
}).on('close', () => {
    const n = parseInt(input[0]); // Number of cities
    const m = parseInt(input[1]); // Number of routes

    const graph = Array.from({ length: n + 1 }, () => []);

    // Build the graph from input
    for (let i = 2; i < 2 + m; i++) {
        const [u, v, w] = input[i].split(' ').map(Number);
        graph[u].push([v, w]);
    }

    const [startCity, endCity] = input[input.length - 1].split(' ').map(Number);

    // Custom Min-Heap Class
    class MinHeap {
        constructor() {
            this.heap = [];
        }

        insert([node, cost]) {
            this.heap.push([node, cost]);
            this.bubbleUp();
        }

        bubbleUp() {
            let index = this.heap.length - 1;
            while (index > 0) {
                let parentIndex = Math.floor((index - 1) / 2);
                if (this.heap[index][1] >= this.heap[parentIndex][1]) break;
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
                    if (leftChild[1] < element[1]) swap = leftChildIndex;
                }

                if (rightChildIndex < length) {
                    rightChild = this.heap[rightChildIndex];
                    if (
                        (swap === null && rightChild[1] < element[1]) ||
                        (swap !== null && rightChild[1] < leftChild[1])
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

    // Dijkstra's algorithm implementation
    const dijkstra = (start) => {
        const distances = Array(n + 1).fill(Infinity);
        distances[start] = 0;

        const pq = new MinHeap();
        pq.insert([start, 0]);

        while (!pq.isEmpty()) {
            const [currentCity, currentDistance] = pq.extractMin();

            if (currentDistance > distances[currentCity]) continue;

            for (const [nextCity, weight] of graph[currentCity]) {
                const newDistance = currentDistance + weight;

                if (newDistance < distances[nextCity]) {
                    distances[nextCity] = newDistance;
                    pq.insert([nextCity, newDistance]);
                }
            }
        }

        return distances;
    };

    const result = dijkstra(startCity);
    console.log(result[endCity]);
});

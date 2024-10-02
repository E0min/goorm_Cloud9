class MinHeap {
    constructor() {
        this.heap = [];
    }

    // 힙에 값을 추가하는 메서드
    push(val) {
        this.heap.push(val);
        this.bubbleUp();
    }

    // 힙에서 가장 작은 값을 추출하는 메서드
    pop() {
        if (this.heap.length === 1) return this.heap.pop();
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return min;
    }

    // 힙에서 상위로 값을 올리는 메서드
    bubbleUp() {
        let index = this.heap.length - 1;
        const last = this.heap[index];

        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.heap[parentIndex];

            if (last >= parent) break;

            this.heap[index] = parent;
            index = parentIndex;
        }

        this.heap[index] = last;
    }

    // 힙에서 하위로 값을 내리는 메서드
    bubbleDown() {
        let index = 0;
        const length = this.heap.length;
        const root = this.heap[0];

        while (true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIndex < length) {
                leftChild = this.heap[leftChildIndex];
                if (leftChild < root) swap = leftChildIndex;
            }

            if (rightChildIndex < length) {
                rightChild = this.heap[rightChildIndex];
                if ((swap === null && rightChild < root) || (swap !== null && rightChild < leftChild)) {
                    swap = rightChildIndex;
                }
            }

            if (swap === null) break;

            this.heap[index] = this.heap[swap];
            index = swap;
        }

        this.heap[index] = root;
    }

    // 힙의 첫 번째 값을 확인하는 메서드
    peek() {
        return this.heap[0];
    }

    // 힙의 크기를 확인하는 메서드
    size() {
        return this.heap.length;
    }
}

function solution(scoville, K) {
    let heap = new MinHeap();
    let answer = 0;

    // 모든 스코빌 지수를 힙에 넣음
    scoville.forEach((s) => heap.push(s));

    while (heap.size() > 1 && heap.peek() < K) {
        let first = heap.pop();  // 가장 작은 값
        let second = heap.pop(); // 두 번째로 작은 값
        let newScoville = first + second * 2;

        heap.push(newScoville);
        answer++;
    }

    return heap.peek() >= K ? answer : -1;
}
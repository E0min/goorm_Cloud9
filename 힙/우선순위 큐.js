class PriorityQueue { // MinHeap
    constructor(arr = []) {
        this.heap = arr.slice(); // 배열 복사
        this.buildHeap();        // 초기 배열을 힙으로 변환
    }

    // 힙을 한 번에 구축하는 메서드 (O(n) 시간 복잡도)
    buildHeap() {
        const n = this.heap.length;
        for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
            this.heapifyDown(i);
        }
    }

    // 요소 삽입
    insert(value) {
        this.heap.push(value);
        this.heapifyUp(this.heap.length - 1);
    }

    // 최솟값 추출
    extractMin() { // 0번째 인덱스를 추출 후 재 정렬
        if (this.heap.length === 0) return null; // 힙이 비어있으면 null 반환
        if (this.heap.length === 1) return this.heap.pop(); // 요소가 하나뿐이면 그것을 반환

        const min = this.heap[0];
        this.heap[0] = this.heap.pop(); // 마지막 요소를 루트 노드로 이동
        this.heapifyDown(0); // 루트 노드부터 heapifyDown 수행

        return min;
    }

    // 상향 조정을 위한 메서드 (heapifyUp)
    heapifyUp(index) {
        let currentIndex = index;
        while (currentIndex > 0) {
            let parentIndex = Math.floor((currentIndex - 1) / 2);
            if (this.heap[currentIndex] < this.heap[parentIndex]) {
                this.swap(currentIndex, parentIndex);
                currentIndex = parentIndex;
            } else {
                break;
            }
        }
    }

    // 하향 조정을 위한 메서드 (heapifyDown)
    heapifyDown(index) {
        let currentIndex = index;
        const length = this.heap.length;

        while (true) {
            let leftChildIndex = 2 * currentIndex + 1;
            let rightChildIndex = 2 * currentIndex + 2;
            let smallest = currentIndex;

            // 왼쪽 자식과 비교
            if (leftChildIndex < length && this.heap[leftChildIndex] < this.heap[smallest]) {
                smallest = leftChildIndex;
                console.log("왼쪽자식과 비교");
            }

            // 오른쪽 자식과 비교
            if (rightChildIndex < length && this.heap[rightChildIndex] < this.heap[smallest]) {
                smallest = rightChildIndex;
                console.log("오른쪽자식과 비교");
            }

            if (smallest !== currentIndex) { // 바뀌었다는 뜻
                this.swap(currentIndex, smallest);
                currentIndex = smallest;
            } else { // 안 바뀐 것
                console.log("더이상 비교할게 없다");
                break;
            }
        }
    }

    // 두 인덱스의 요소를 교환하는 메서드
    swap(i, j) {
        const temp = this.heap[i];
        this.heap[i] = this.heap[j];
        this.heap[j] = temp;
    }

    // 힙의 현재 크기를 반환하는 메서드
    size() {
        return this.heap.length;
    }
}


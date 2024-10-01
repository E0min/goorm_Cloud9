function solution(scoville, K) {
    let pq = new MinHeap(scoville);
    let count=0;
    

    while(true){
        //최솟값 추출 
        let s = pq.extractMin();
        let b = pq.extractMin();
        if(b==null && s<K){
            return -1;
        }else if(s<K){
            pq.insert(newFood(s,b));
            count++;
        }else if(s>=K){
            return count;
        }
    }
}
class MinHeap {
    constructor(arr) {
        this.heap = [];
        arr.forEach(a=>{
            this.insert(a);
        })
    }

    // 요소 삽입
    insert(value) {
        this.heap.push(value);      // 새 요소를 배열의 끝에 삽입
        this.heapifyUp();           // HeapifyUp을 통해 적절한 위치로 이동
    }

    // 최솟값 추출 (HeapifyDown 과정 포함)
    extractMin() {
        if (this.heap.length === 0) return null;  // 힙이 비어있으면 null 반환
        if (this.heap.length === 1) return this.heap.pop();  // 요소가 하나뿐이면 그것을 반환

        const min = this.heap[0];   // 루트 노드(최솟값)를 저장
        this.heap[0] = this.heap.pop();  // 마지막 요소를 루트로 이동
        this.heapifyDown();         // HeapifyDown을 통해 적절한 위치로 이동

        return min;
    }

    // HeapifyUp (삽입 시)
    heapifyUp() {
        let index = this.heap.length - 1;  // 새로 삽입된 요소의 인덱스

        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);  // 부모 노드의 인덱스

            // 부모가 자식보다 크면 교환
            if (this.heap[parentIndex] > this.heap[index]) {
                this.swap(parentIndex, index);  // 부모와 교환
                index = parentIndex;  // 인덱스를 부모로 업데이트
            } else {
                break;  // 부모가 자식보다 작으면 종료
            }
        }
    }

    // HeapifyDown (삭제 시)
    heapifyDown() {
        let index = 0;  // 루트부터 시작
        const length = this.heap.length;

        while (true) {
            let leftChildIndex = 2 * index + 1;  // 왼쪽 자식의 인덱스
            let rightChildIndex = 2 * index + 2;  // 오른쪽 자식의 인덱스
            let smallest = index;  // 가장 작은 값의 인덱스를 현재 노드로 설정

            // 왼쪽 자식과 비교
            if (leftChildIndex < length && this.heap[leftChildIndex] < this.heap[smallest]) {
                smallest = leftChildIndex;
            }

            // 오른쪽 자식과 비교
            if (rightChildIndex < length && this.heap[rightChildIndex] < this.heap[smallest]) {
                smallest = rightChildIndex;
            }

            // 부모와 자식 노드를 교환해야 하면 교환
            if (smallest !== index) {
                this.swap(index, smallest);
                index = smallest;  // 교환된 자식의 인덱스로 이동
            } else {
                break;  // 더 이상 교환할 필요가 없으면 종료
            }
        }
    }

    // 두 인덱스의 요소를 교환
    swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }
}

function newFood(s,b){
    return s + (b*2);
}


class MinHeap {
  constructor() {
      this.heap = [null];
  }

  size() {
      return this.heap.length - 1; // 실제 요소의 개수를 반환
  }

  push(val) {
      this.heap.push(val);
      this.bubbleUp();
  }

  bubbleUp() {
      let childIdx = this.size();
      
      while (childIdx > 1) {
          let parentIdx = Math.floor(childIdx / 2);
          
          if (this.heap[childIdx] >= this.heap[parentIdx]) break;
          [this.heap[childIdx], this.heap[parentIdx]] = [this.heap[parentIdx], this.heap[childIdx]];
          childIdx = parentIdx;
      }
  }

  pop() {
      if (this.size() === 0) return null;
      let min = this.heap[1];
      let current = this.heap.pop();
      
      if (this.size() > 0) {
          this.heap[1] = current;
          this.sinkDown();
      }
      
      return min;
  }

  sinkDown() {
      let idx = 1;
      let ele = this.heap[idx];
      let len = this.size();
      
      while (true) {
          let leftIdx = 2 * idx;
          let rightIdx = 2 * idx + 1;
          let leftEle, rightEle;
          let swap = null;
          
          if (leftIdx <= len) {
              leftEle = this.heap[leftIdx];
              if (leftEle < ele) swap = leftIdx;
          }
          
          if (rightIdx <= len) {
              rightEle = this.heap[rightIdx];
              if ((swap === null && rightEle < ele) || (swap !== null && rightEle < leftEle)) {
                  swap = rightIdx;
              }
          }
          
          if (swap === null) break;
          
          this.heap[idx] = this.heap[swap];
          idx = swap;
      }
      this.heap[idx] = ele;
  }
}

function solution(scoville, K) {
  let minHeap = new MinHeap();
  let mixedCnt = 0;
  
  // 힙에 추가
  for (let scov of scoville) {
      minHeap.push(scov);
  }
  
  // 가장 작은 스코빌지수가 K 이상이면 반복 중단
  while (minHeap.size() > 1 && minHeap.heap[1] < K) {
      let first = minHeap.pop();
      let second = minHeap.pop() * 2;
      minHeap.push(first + second);
      mixedCnt++;
  }
  
  return minHeap.heap[1] >= K ? mixedCnt : -1;
}
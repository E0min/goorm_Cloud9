const dijkstra = (n, graph, start) => { // n은 노드의 갯수
    const distances = Array(n + 1).fill(Infinity); // 거리 초기화
    distances[start] = 0; // 시작 노드의 거리는 0
  
    const priorityQueue = [[start, 0]]; // 우선순위 큐로 사용할 배열 (최소 힙)
  
    while (priorityQueue.length > 0) {
      // 큐에서 가장 작은 거리를 가진 노드 꺼내기
      const [currentNode, currentDistance] = priorityQueue.shift();
  
      // 이미 처리된 노드라면 무시
      if (currentDistance > distances[currentNode]) continue;
  
      // 인접한 노드 탐색
      for (const [nextNode, weight] of graph[currentNode]) {
        const distance = currentDistance + weight;
  
        // 더 짧은 경로를 발견한 경우
        if (distance < distances[nextNode]) {
          distances[nextNode] = distance; // 최단 거리 갱신
          priorityQueue.push([nextNode, distance]); // 큐에 추가
          // 최소 힙처럼 동작하게 정렬
          priorityQueue.sort((a, b) => a[1] - b[1]);
        }
      }
    }
  
    return distances;
  };
  
  // 그래프 예시 (노드 간 가중치)
  const graph = [
    [], // 0번 노드는 사용하지 않음
    [[2, 2], [3, 5]], // 1번 노드와 연결된 노드들 (2번: 가중치 2, 3번: 가중치 5)
    [[3, 1]], // 2번 노드와 연결된 노드들 (3번: 가중치 1)
    [] // 3번 노드는 연결된 노드 없음
  ];
  
  console.log(dijkstra(3, graph, 1)); // [Infinity, 0, 2, 3]
  
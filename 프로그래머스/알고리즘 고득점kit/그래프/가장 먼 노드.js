function solution(n, edge) {
  // 인접 리스트 생성
  const graph = Array.from({ length: n + 1 }, () => []);
  edge.forEach(([a, b]) => {
    graph[a].push(b);
    graph[b].push(a); // 양방향 연결
  });

  // 1번 노드부터 BFS 시작
  const distances = Array(n + 1).fill(Infinity); // 거리 저장 배열, 처음엔 모든 거리를 무한으로 설정
  distances[1] = 0; // 1번 노드는 거리 0
  const queue = [1]; // BFS 탐색을 위한 큐

  while (queue.length > 0) {
    const current = queue.shift();
    graph[current].forEach((neighbor) => {
      if (distances[neighbor] === Infinity) {
        // 아직 방문하지 않은 노드일 경우
        distances[neighbor] = distances[current] + 1; // 현재 노드 거리 + 1
        queue.push(neighbor); // 큐에 추가하여 계속 탐색
      }
    });
  }

  // 가장 멀리 있는 거리 찾기
  const maxDistance = Math.max(...distances.slice(1)); // 1번 노드부터의 최대 거리
  const farthestNodesCount = distances.filter(
    (distance) => distance === maxDistance
  ).length; // 가장 멀리 있는 노드 개수 세기

  return farthestNodesCount;
}

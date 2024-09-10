const readline = require('readline');

// readline 인터페이스 생성
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 입력을 저장할 배열
let input = [];
rl.on('line', function (line) {
    input.push(line);
}).on('close', function () {
    const [N, M] = input[0].split(" ").map(Number); // N: 정점 수, M: 간선 수
    const edges = input.slice(1).map(line => line.split(" ").map(Number)); // [u,v]

    // 인접 행렬 생성 및 초기화
    let graph = Array.from({ length: N + 1 }, () => Array(N + 1).fill(0));
    let visited = Array(N + 1).fill(false);

    // 간선 정보로 그래프 구성 (무방향 그래프)
    edges.forEach(([a, b]) => {
        graph[a][b] = 1;
        graph[b][a] = 1;
    });

    let count = 0; // 연결 요소 개수

    // 모든 노드를 순회하며 DFS 수행
    for (let i = 1; i <= N; i++) {
        if (!visited[i]) { // 방문하지 않은 노드에서 시작
            let stack = [i]; // 스택에 시작 노드를 추가
            visited[i] = true; // 방문 처리

            // DFS 수행
            while (stack.length > 0) {
                let node = stack.pop(); // 스택에서 노드를 꺼냄

                // 현재 노드와 연결된 모든 노드 탐색
                for (let j = 1; j <= N; j++) {
                    if (graph[node][j] === 1 && !visited[j]) { // 연결된 노드가 방문되지 않았으면
                        stack.push(j); // 스택에 추가
                        visited[j] = true; // 방문 처리
                    }
                }
            }
            count++; // 하나의 연결 요소가 끝나면 카운트 증가
        }
    }

    console.log(count); // 연결 요소 개수 출력
    rl.close();
});
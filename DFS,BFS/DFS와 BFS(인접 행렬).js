const readline = require('readline');

// readline 인터페이스 생성
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 질문을 받아 처리할 배열
let input = [];
rl.on('line', function (line) {
    input.push(line);
}).on('close', function () {

    let [N, M, V] = input[0].split(" ").map(Number); // N: 정점 수, M: 간선 수, V: 시작 정점
    let edges = input.slice(1).map(line => line.split(" ").map(Number));

    // 인접 행렬 생성 (1-based index)
    let matrix = Array.from({ length: N + 1 }, () => Array(N + 1).fill(0));

    // 간선 추가 (양방향 그래프)
    edges.forEach(([a, b]) => {
        matrix[a][b] = 1;
        matrix[b][a] = 1;  // 무방향 그래프이므로 양방향으로 간선을 추가
    });

    //////////////////////////DFS (스택을 사용한 구현)//////////////////////////////
    let visitedDFS = Array(N + 1).fill(false); // 방문한 노드를 기록하는 배열
    let resultDFS = []; // 방문 순서를 기록할 배열
    let stack = [V]; // 시작 노드를 스택에 추가
    visitedDFS[V] = true; // 스택에 넣기 전에 방문 처리

    while (stack.length > 0) {
        let nodeDFS = stack.pop();
        resultDFS.push(nodeDFS); // 방문한 노드를 결과 배열에 추가

        // 스택에 작은 번호부터 탐색하기 위해 큰 번호를 먼저 넣는다.
        for (let i = N; i > 0; i--) {
            if (matrix[nodeDFS][i] === 1 && !visitedDFS[i]) {
                visitedDFS[i] = true; // 스택에 넣기 전에 방문 처리
                stack.push(i);
            }
        }
    }
    console.log(resultDFS.join(' ')); // DFS 결과 출력
    /////////////////////////////////////////////////////////////////////////////

    ////////////////////////////////////BFS (큐를 사용한 구현)///////////////////
    let visitedBFS = Array(N + 1).fill(false); // 방문한 노드를 기록하는 배열
    let resultBFS = []; // 방문 순서를 기록할 배열
    let deque = [V]; // 큐로 시작 노드를 추가
    visitedBFS[V] = true; // 큐에 넣기 전에 방문 처리

    while (deque.length > 0) {
        let nodeBFS = deque.shift(); // 큐에서 노드를 꺼냄
        resultBFS.push(nodeBFS); // 방문한 노드를 결과 배열에 추가

        // 인접 노드를 작은 번호 순으로 큐에 추가
        for (let i = 1; i <= N; i++) {
            if (matrix[nodeBFS][i] === 1 && !visitedBFS[i]) {
                visitedBFS[i] = true; // 큐에 넣기 전에 방문 처리
                deque.push(i); // 방문하지 않은 인접 노드를 큐에 추가
            }
        }
    }

    console.log(resultBFS.join(' ')); // BFS 결과 출력
    ////////////////////////////////////////////////////////////////////////////

    rl.close();
});
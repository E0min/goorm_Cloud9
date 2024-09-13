////https://www.acmicpc.net/problem/1260

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

    let [N, M, V] = input[0].split(" ").map(Number); // N: 정점 수, M: 간선 수, V: 시작 정점
    let edges = input.slice(1).map(line => line.split(" ").map(Number));

    // 인접 행렬 생성 (1-based index)
    let matrix = Array.from({ length: N + 1 }, () => Array(N + 1).fill(0));

    // 간선 추가 (양방향 그래프)
    edges.forEach(([a, b]) => {
        matrix[a][b] = 1;
        matrix[b][a] = 1;  // 무방향 그래프이므로 양방향으로 간선을 추가
    });

    //////////////////////////DFS (재귀 함수 사용한 구현)///////////////////////////
    let visitedDFS = Array(N + 1).fill(false); // 방문한 노드를 기록하는 배열
    let resultDFS = []; // 방문 순서를 기록할 배열

    // DFS 재귀 함수
    function dfs(node) {
        visitedDFS[node] = true; // 노드 방문 처리
        resultDFS.push(node); // 방문한 노드를 결과 배열에 추가

        // 인접 노드를 작은 번호부터 탐색
        for (let i = 1; i <= N; i++) {
            if (matrix[node][i] === 1 && !visitedDFS[i]) {
                dfs(i); // 재귀적으로 탐색
            }
        }
    }

    dfs(V); // 시작 정점 V에서 DFS 시작
    console.log(resultDFS.join(' ')); // DFS 결과 출력
    rl.close();
});
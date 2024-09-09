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

    const N = parseInt(input[0]);  // 컴퓨터 수

    let edges = input.slice(2).map(line => line.split(" ").map(Number)); // 간선 정보
    let adjacentList = Array.from({ length: N + 1 }, () => []);  // 인접 리스트 생성

    // 인접 리스트에 간선 정보 추가 (무방향 그래프)
    edges.forEach(([a, b]) => {
        adjacentList[a].push(b);
        adjacentList[b].push(a);
    });

    let visited = Array(N + 1).fill(false);  // 방문 여부 기록
    let result = [];  // 감염된 컴퓨터를 저장할 배열

    // BFS 구현
    let queue = [1];  // 1번 컴퓨터에서 시작
    visited[1] = true;  // 1번 컴퓨터 방문 처리

    while (queue.length > 0) {
        let node = queue.shift();  // 큐에서 노드를 꺼냄
        for (let i = 0; i < adjacentList[node].length; i++) {
            let neighbor = adjacentList[node][i];  // 인접 노드
            if (!visited[neighbor]) {  // 아직 방문하지 않은 인접 노드라면
                queue.push(neighbor);  // 큐에 추가
                result.push(neighbor);  // 감염된 컴퓨터로 추가
                visited[neighbor] = true;  // 방문 처리
            }
        }
    }

    // 감염된 컴퓨터 수 출력 (1번 컴퓨터는 제외)
    console.log(result.length);

    rl.close();
});
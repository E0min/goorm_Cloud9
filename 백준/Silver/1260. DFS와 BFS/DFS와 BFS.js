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

    // 인접 리스트 생성 (1-based index)
    let adjacentList = Array.from({ length: N + 1 }, () => []);

    // 간선 추가 (양방향 그래프)
    edges.forEach(([a, b]) => {
        adjacentList[a].push(b);
        adjacentList[b].push(a);
    });

    // 각 정점의 인접 노드를 번호 순서대로 정렬
    adjacentList.forEach(neighbors => neighbors.sort((a, b) => a - b));

    //////////////////////////DFS (스택을 사용한 구현)//////////////////////////////
    let visitedDFS = Array(N + 1).fill(false); // 방문한 노드를 기록하는 배열
    let resultDFS = []; // 방문 순서를 기록할 배열
    let stack = [V]; // 시작 노드를 스택에 추가

    while (stack.length > 0) {
        let nodeDFS = stack.pop();

        if (!visitedDFS[nodeDFS]) { // 아직 방문하지 않은 경우
            visitedDFS[nodeDFS] = true; // 방문 처리
            resultDFS.push(nodeDFS); // 방문한 노드를 결과 배열에 추가

            // 번호가 큰 순서대로 스택에 넣기 (작은 번호부터 탐색되게 하기 위해)
            for (let i = adjacentList[nodeDFS].length - 1; i >= 0; i--) {
                let neighbor = adjacentList[nodeDFS][i];
                if (!visitedDFS[neighbor]) {
                    stack.push(neighbor);
                }
            }
        }
    }
    console.log(resultDFS.join(' ')); // DFS 결과 출력
    /////////////////////////////////////////////////////////////////////////////

    ////////////////////////////////////BFS (큐를 사용한 구현)///////////////////
    let visitedBFS = Array(N + 1).fill(false); // 방문한 노드를 기록하는 배열
    let resultBFS = []; // 방문 순서를 기록할 배열
    let queue = [V]; // 시작 노드를 큐에 추가
    visitedBFS[V] = true; // 시작 노드 방문 처리

    while (queue.length > 0) {
        let nodeBFS = queue.shift(); // 큐에서 노드를 꺼냄
        resultBFS.push(nodeBFS); // 방문한 노드를 결과 배열에 추가

        // 인접 노드를 작은 번호 순으로 큐에 추가
        for (let neighbor of adjacentList[nodeBFS]) {
            if (!visitedBFS[neighbor]) {
                visitedBFS[neighbor] = true; // 방문 처리
                queue.push(neighbor); // 방문하지 않은 인접 노드를 큐에 추가
            }
        }
    }

    console.log(resultBFS.join(' ')); // BFS 결과 출력
    ////////////////////////////////////////////////////////////////////////////

    rl.close();
});
const readline = require('readline');

// readline 인터페이스를 만듭니다.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 질문을 던지고 답변을 받습니다.
let input = [];
rl.on('line', function (line) {
    input.push(line);
}).on('close', function () {
    
    let [V, E] = input[0].split(" ").map(Number);
    let S = parseInt(input[1]);
    let edges = input.slice(2).map(line => line.split(" ").map(Number)); // u, v, w

    // 주어진 입력을 그래프로 표현: 인접 리스트
    let graph = Array.from({ length: V + 1 }, () => []);
    edges.forEach(([u, v, w]) => {
        graph[u].push([v, w]);
    });
    
    // 가중치 배열: 시작 노드
    let weight = new Array(V + 1).fill(Infinity);
    weight[S] = 0;

    // 우선순위 큐 역할을 하는 배열
    let priorityQueue = [[S, 0]];

    while (priorityQueue.length > 0) {
        // 아직 방문하지 않은 노드 중에 가중치가 제일 작은 것 선택
        priorityQueue.sort((a, b) => a[1] - b[1]); // 가중치 기준으로 정렬
        let [currentNode, currentWeight] = priorityQueue.shift();

        // 현재 노드의 인접 노드들 확인
        graph[currentNode].forEach(([v, w]) => {
            let newWeight = currentWeight + w;
            if (weight[v] > newWeight) {
                weight[v] = newWeight;
                priorityQueue.push([v, newWeight]);
            }
        });
    }

    // 결과 출력
    for (let i = 1; i <= V; i++) {
        if (weight[i] === Infinity) {
            console.log("INF");
        } else {
            console.log(weight[i]);
        }
    }

    process.exit();
});
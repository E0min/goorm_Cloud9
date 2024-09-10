//https://www.acmicpc.net/problem/1260
// 백준 실버 2

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
    
    let [N,M,V] = input[0].split(" ").map(Number); //M은 간선 갯수, V는 시작 vertex의 번호
    let edges = input.slice(1).map(line => line.split(" ").map(Number));

    // 인접 리스트 만들기
    let adjacentList = Array.from({ length: N + 1 }, () => []);
    
    edges.forEach(([a,b])=>{
        adjacentList[a].push(b);
        adjacentList[b].push(a);
    })
    
    // 각 정점의 인접 노드를 번호 순서대로 정렬
    adjacentList.forEach(neighbors => neighbors.sort((a, b) => a - b));

    //////////////////////////DFS/////////////////////////////////////
    let visitedDFS = Array(N + 1).fill(false); // 방문한 노드를 기록하는 배열
    let resultDFS=[]; // 방문 순서를 기록한 배열
    let stack = [V];
    while(stack.length>0){
        let nodeDFS = stack.pop(); 
        if(!visitedDFS[nodeDFS]){ //아직 방문하지 않았다면
            visitedDFS[nodeDFS] = true; //방문했으니 방문함으로 바꾸고
            resultDFS.push(nodeDFS); //방문 순서를 기록한 배열에 추가
            for(let i = adjacentList[nodeDFS].length-1 ; i >= 0 ; i--){//인접 노드 확인
                let neighbor = adjacentList[nodeDFS][i]; // 인접한 노드
                if(!visitedDFS[neighbor]){
                    stack.push(neighbor);
                }
            }
        }
        
    }
    console.log(resultDFS.join(' ')); // DFS 결과 출력
    //////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////BFS/////////////////////////////////////
    let visitedBFS = Array(N + 1).fill(false); // 방문한 노드를 기록하는 배열
    let resultBFS=[]; // 방문 순서를 기록한 배열
    let queue=[V];
    while(queue.length>0){
        let nodeBFS = queue.shift();
        resultBFS.push(nodeBFS); //방문 순서에 추가
        for(let i = 1;i<=N;i++){
            if(!visitedBFS[nodeBFS][i]){//방문하지 않은 노드라면
                visitedBFS[nodeBFS][i] = true;
                queue.push(i);
            }
        }
    }
    console.log(resultBFS.join(' ')); // DFS 결과 출력




    rl.close();

});

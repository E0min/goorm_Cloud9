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
    
    let N = parseInt(input[0]); //도시의 갯수
    let edges = input.slice(2).map(line => line.split(" ").map(Number)); // u, v, w

    let [startCity,endCity]=edges.pop();
    //그래프 만들기
    let graph = Array.from({length:N+1},()=>[]);
    edges.forEach(([u,v,w])=>{
        graph[u].push([v,w]);
    })

    //가중치 배열 만들기
    let weight = new Array(N+1).fill(Infinity);
    weight[startCity] = 0;

    // 우선순위 큐 작성
    let priorityQueue = [[startCity,0]]; //[도착노드,현재노드까지의 가중치]

    while(priorityQueue.length>0){
        priorityQueue.sort((a,b)=>{ a[1] - b[1]}); // 가중치가 작은 순서대로 정렬
        let [currentNode,currentDistance] = priorityQueue.shift(); // 현재까지 가중치가 제일 작은 노드를 선택한다는 의미
        graph[currentNode].forEach(([v,w])=>{
            if(weight[v]>currentDistance+w){
                weight[v] = currentDistance+w;
                priorityQueue.push([v,currentDistance+w]);
            }
        })
    }

    console.log(weight[endCity]);
    
});
//https://www.acmicpc.net/problem/11657
//벨만 - 포드 알고리즘

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
    
    let [N,M] = input[0].split(" ").map(Number);
    let edges = input.slice(1).map(line => line.split(" ").map(Number));

    //벨만 - 포드 알고리즘

    //distance 배열 생성
    let d = new Array(N+1).fill(Infinity);
    d[1]=0;

    //간선 완화(Relaxation)
    for(let i = 1 ; i< N ; i++){ // N-1번만큼 relaxation 해야함
        edges.forEach(([u,v,w])=>{
            if(d[u]+w<d[v]){
                d[v] = d[u]+w;
            }
        })
    }
    
    // 음수 사이클 존재하는지 확인
    edges.forEach(([u,v,w])=>{
        if(d[u]+w<d[v]){
            console.log(-1);
            process.exit();
        }
    });

    for (let i = 2; i <= N; i++) {
        // 경로가 없는 경우에는 -1 출력
        if (d[i] === Infinity) {
            console.log(-1);
        } else {
            console.log(d[i]);
        }
    }
    process.exit();
});


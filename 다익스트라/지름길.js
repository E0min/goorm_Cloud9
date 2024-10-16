//https://www.acmicpc.net/problem/1446
//백준
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
    
    let [N,distance] = input[0].split(" ").map(Number);
    let shortcut = input.slice(1).map(line => line.split(" ").map(Number));
    dijkstra(distance,shortcut);
    
    //0부터 distance 직전까지 가장 최단 거리를 구한다.
    process.exit();
});

const dijkstra = (D,shortcut) => { // n은 노드의 갯수
    //0. 다익스트라는 시작노드를 기준으로 모든 노드를 최소 가중치로 연결하는 알고리즘
    //1. 전체 노드에 대해 가중치 배열을 무한대로 초기화
    let distance = new Array(D+1).fill(Infinity);
    distance[0] = 0;

    let shortWay = Array.from({length:D+1},()=>[]);
    for (let [start,end,dis] of shortcut){
        if(end<=D && (end-start)>dis){
            shortWay[start].push([end,dis]);
        }
    }
    
    for(let i = 0 ; i <= D ; i++){
        if(distance[i]+1<distance[i+1]){
            distance[i+1] = distance[i]+1;
        }

        if(shortWay[i].length !=0){
            for(let [end,dis] of shortWay[i]){
                distance[end] = Math.min(distance[end],dis+distance[i]);
            }
        }
        
 
    }
    console.log(distance[D]);
    return distance;

  };
  
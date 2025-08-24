const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const n = Number(input[0]);
//a와 b의 촌수 구하기
const [a, b] = input[1].split(" ").map(Number);
const m = Number(input[2]);

//이후 입력들 저장
const graph = Array.from({length:n+1},()=>[]);

//부모 관계 그래프에 저장
for(let i=3;i<3+m;i++){
    //  a는 부모, b는 자식
    const [a,b] = input[i].split(" ").map(Number);
    graph[a].push(b);
    graph[b].push(a);
}

//방문 배열
const visited = Array.from({length:n+1},()=>false);

//BFS 시작
const queue =[[a,0]]; // [노드, 촌수]
visited[a] = true;

while(queue.length > 0){
    const [currentNode, degree] = queue.shift();
    if(currentNode === b) {
        console.log(degree);
        return;
    }
    for(const neighbor of graph[currentNode]) {
        if(!visited[neighbor]) {
            visited[neighbor] = true;
            queue.push([neighbor, degree + 1]);
        }
    }

}

console.log(-1)
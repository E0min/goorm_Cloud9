//https://www.acmicpc.net/problem/1922

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
    let edges = input.slice(2).map(line => line.split(" ").map(Number)); // u, v, w
    
    //유니온 - 파인드 클래스를 사용
    let uf = new UnionFind(V+1);

    //간선들을 가중치 순으로 정렬
    edges.sort((a,b)=>a[2]-b[2]);

    //MST 배열 생성
    let weight=0;

    //서로소 집합들을 연결하는 알고리즘
    edges.forEach(([u,v,w])=>{
        if(uf.find(u)!==uf.find(v)){ // 서로소 집합인 경우
            uf.union(u,v);
            weight += w
        }
    })

    
    console.log(weight);
    process.exit();
});

class UnionFind {
    constructor(size){//노드의 갯수
        //부모를 찾는 배열
        this.parent = Array.from({length:size},(_,index)=>index);
        //랭크 배열
        this.rank = new Array(size).fill(0);
    }

    find(a){ //노드 a의 최상단 부모 루트를 찾는 방법
        if(this.parent[a] != a ){
            this.parent[a] = this.find(this.parent[a]);
        }
        return this.parent[a];
    }

    union(u,v){ // 두개의 노드를 합치기
        const rootU = this.find(u);
        const rootV = this.find(v);

        if(rootU==rootV){return} // 두 노드의 루트가 같은지를 비교

        if(this.rank[rootU]>this.rank[rootV]){ // 루트 노드의 랭크가 더 높은 쪽에 붙이기
            this.parent[rootV] = rootU;
        }else if(this.rank[rootU]<this.rank[rootV]){ // 루트 노드의 랭크가 더 높은 쪽에 붙이기
            this.parent[rootU] = rootV;
        }else{ //두 노드의 랭크가 같을 경우
            this.rank[rootU]++; //임의로 rootU의 랭크를 올렸다.
            this.parent[rootV] = rootU; // 임의로 정했다.
        }
    }
}
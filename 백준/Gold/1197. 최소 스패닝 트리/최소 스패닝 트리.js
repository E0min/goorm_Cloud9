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
    let edges = input.slice(1).map(line => line.split(" ").map(Number)); // u, v, w

    //크루스칼 알고리즘을 이용한 MST
    //간선을 오름차순으로 정렬
    edges.sort((a,b)=>a[2]-b[2]);
    let uf = new UnionFind(V+1);    //유니온-파인드 자료구조로 각 노드를 저장
    let MST = [];
    let weight=0;


    //서로소 집합인 경우에 합집합으로 만들기
    edges.forEach(([u,v,w])=>{
        if(uf.find(u)!==uf.find(v)){//만약 같은 집합이 아니라면 
            uf.union(u,v);
            MST.push([u,v,w]);
            weight += w;
        }
    })
    console.log(weight);

    process.exit();
});

class UnionFind {
    constructor(size) {
      // 부모 배열 초기화: 각 원소의 부모를 자기 자신으로 설정
      this.parent = Array.from({ length: size }, (_, index) => index);
      // 랭크 배열 초기화: 모든 랭크를 0으로 설정
      this.rank = Array(size).fill(0);
    }
  
    // Find 연산 (경로 압축 적용)
    find(u) {
      if (this.parent[u] !== u) {
        // 부모를 재귀적으로 찾으면서 경로 압축 수행
        this.parent[u] = this.find(this.parent[u]);
      }
      return this.parent[u];
    }
  
    // Union 연산 (랭크 기반 합치기 적용)
    union(u, v) {
      const rootU = this.find(u);
      const rootV = this.find(v);
  
      // 이미 같은 집합에 속한 경우
      if (rootU === rootV) return;
  
      // 랭크 기반으로 트리 합치기
      if (this.rank[rootU] < this.rank[rootV]) {
        this.parent[rootU] = rootV;
      } else if (this.rank[rootU] > this.rank[rootV]) {
        this.parent[rootV] = rootU;
      } else {
        this.parent[rootV] = rootU;
        this.rank[rootU] += 1;
      }
    }
  }
  
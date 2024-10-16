function solution(n, edge) {
    var answer = 0;
    let graph = new Array(n+1).fill(null).map(() => []);
    let graphVisited = new Array(n+1).fill(0);
    let graphDis = new Array(n+1).fill(0);

    
    while(edge.length>0){
        let [a , b] = edge.pop();
        graph[a].push(b);
        graph[b].push(a);
    }
    
    let queue=[1];
    graphVisited[1] = 1;
    //초기 세팅: 1번을 기준으로 삼는다.
    //1번과 연결된 노드들을 큐에 넣고 방문표시 및 거리 표시한다.    

    
    while(queue.length>0){
        let curNode = queue.shift();

        //curNode와 연결된 노드들 중 방문안한 노드 큐에 삽입
        graph[curNode].forEach((node)=>{
            if(graphVisited[node]===0){ //방문하지 않은 노드라면
                queue.push(node); //큐에 추가
                graphVisited[node] = 1;
                graphDis[node] = graphDis[curNode]+1;
            }
        })
    }
    console.log(graphDis)
    let max = Math.max(...graphDis);
    graphDis.forEach((m)=>{
        if(m===max){
            answer++;
        }
    })
    

    return answer;
}
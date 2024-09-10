//백준
//인접 매트릭스와 BFS
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
    let [Y,X] = input[0].split(" ").map(Number);
    // let maze = Array.from({length:Y},()=>{Array.from({length:X})});
    // let visited = Array.from({length:Y},()=>{Array.from({length:X})});
    let maze = Array.from({ length: Y }, () => Array(X).fill(0)); // 미로 초기화
    let visited = Array.from({ length: Y }, () => Array(X).fill(false)); // 방문 여부 초기화


    for(let i =0 ; i<Y;i++){
        maze[i] = input[i+1].split("").map(Number);
        visited[i] = input[i+1].split("").map(a=>{if(a==1){return false}});
    }
    let distance = Array.from({ length: Y }, () => Array(X).fill(0)); // 거리를 저장하는 배열
    distance[0][0] = 1; // 시작점 거리는 1

    let direction = [[1,0],[-1,0],[0,1],[0,-1]];
    // let stack =[[0,0]];
    // let count = 0;
    //DFS함수 사용해서 재귀적으로 구현하기
    // while(stack.length>0){
    //     let [y,x] = stack.pop();
    //     visited[y][x] = true;
    //     count++;
    //     if(y==Y-1&&x==X-1){
    //         break;
    //     }
    //     direction.forEach(a=>{
    //         let newX = x + a[0];
    //         let newY = y + a[1];
    //         if(newX>=0&&newY>=0&&newX<X&&newY<Y&&!visited[newY][newX]&&maze[newY][newX]==1){
    //             stack.push([newY,newX]);
    //         }
    //     })
    // }

    let queue = [[0,0]];
    while(queue.length>0){
        let [y,x] = queue.shift();
        visited[y][x] = true;

        if(y== Y- 1&&x==X-1){
            break;
        }
        direction.forEach(a=>{
            let newX = x + a[0];
            let newY = y + a[1];
            if(newX>=0&&newY>=0&&newX<X&&newY<Y&&!visited[newY][newX]&&maze[newY][newX]==1){
                queue.push([newY,newX]);
                distance[newY][newX] = distance[y][x] + 1;
            }
        })
    }

    console.log(distance[Y-1][X-1]);
    rl.close();

});

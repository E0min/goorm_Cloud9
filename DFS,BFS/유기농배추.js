//백준
//https://www.acmicpc.net/problem/1012
//인접 매트릭스와 DFS(반복문)
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
    let T = parseInt(input[0]);
    let index = 1;
    let direction = [[-1, 0], [1, 0], [0, -1], [0, 1]];

    for (let t = 0; t < T; t++) {
        let cluster = 0;

        let [M, N, K] = input[index++].split(" ").map(Number);
        let cabbageField = Array.from({ length: N }, () => Array(M).fill(0));  // 인접 행렬 만들기
        let visited = Array.from({ length: N }, () => Array(M).fill(false));

        for (let i = 0; i < K; i++) { // 배추 위치 설정
            const [x, y] = input[index++].split(" ").map(Number);
            cabbageField[y][x] = 1;
        }


        //클러스터 시작 인덱스 찾고 DFS시작.
        for (let i = 0; i < N; i++) { // i는 N (Y)
            for (let j = 0; j < M; j++) { // j는 M (X)
                //배추가 있고 방문하지 않은 경우에만 DFS시작
                if (cabbageField[i][j] == 1 && !visited[i][j]) {
                    let stack = [[i, j]]; //해당 위치를 스택에 추가 i는 y, j는 x
                    visited[i][j] = true;
                    //DFS시작
                    while (stack.length > 0) {
                        let [curY,curX] = stack.pop(); // 스택에 있는 좌표를 pop; , 배열에는 y,x순으로 들어가야함
                        direction.forEach(a=>{
                            let newX = curX+a[1];
                            let newY = curY+a[0];
                            if(newX>=0&&newY>=0&&newX<M&&newY<N&&!visited[newY][newX]&&cabbageField[newY][newX]==1){
                                stack.push([newY,newX]);
                                visited[newY][newX] = true;
                            }
                        })
                    }
                    cluster++;
                }
            }

        }
        console.log(cluster);
    }
    rl.close();


});

// const readline = require('readline');

// // readline 인터페이스 생성
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// // 질문을 받아 처리할 배열
// let input = [];
// rl.on('line', function (line) {
//     input.push(line);
// }).on('close', function () {
//     let T = parseInt(input[0]);
//     let index = 1; // 첫 번째 입력은 T이므로, 1부터 시작
//     const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]]; // 상, 하, 좌, 우 탐색 방향

//     for (let t = 0; t < T; t++) {
//         let [M, N, K] = input[index++].split(" ").map(Number); // M: 가로, N: 세로, K: 배추 개수
//         let cabbageField = Array.from({ length: N }, () => Array(M).fill(0)); // 배추밭 (N x M)
//         let visited = Array.from({ length: N }, () => Array(M).fill(false)); // 방문 배열
//         let clusterCount = 0;

//         // 배추 위치 설정
//         for (let i = 0; i < K; i++) {
//             const [x, y] = input[index++].split(" ").map(Number);
//             cabbageField[y][x] = 1; // 배추가 있는 곳을 1로 설정
//         }

//         // DFS 함수 정의
//         const dfs = (x, y) => {
//             let stack = [[x, y]];
//             visited[y][x] = true;

//             while (stack.length > 0) {
//                 let [curX, curY] = stack.pop();

//                 // 네 방향 탐색
//                 for (let [dx, dy] of directions) {
//                     let newX = curX + dx;
//                     let newY = curY + dy;

//                     // 유효한 좌표인지 확인
//                     if (newX >= 0 && newX < M && newY >= 0 && newY < N) {
//                         // 배추가 있고 아직 방문하지 않았다면 스택에 추가
//                         if (cabbageField[newY][newX] === 1 && !visited[newY][newX]) {
//                             visited[newY][newX] = true;
//                             stack.push([newX, newY]);
//                         }
//                     }
//                 }
//             }
//         };

//         // 배추밭을 순회하면서 군집을 찾음
//         for (let y = 0; y < N; y++) {
//             for (let x = 0; x < M; x++) {
//                 // 배추가 있고 방문하지 않은 경우 새로운 군집 발견
//                 if (cabbageField[y][x] === 1 && !visited[y][x]) {
//                     dfs(x, y); // 해당 군집에 대해 DFS 탐색
//                     clusterCount++; // 군집 수 증가
//                 }
//             }
//         }

//         console.log(clusterCount); // 해당 테스트 케이스의 군집 수 출력
//     }
//     rl.close();
// });
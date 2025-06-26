const { dirname } = require('path');
const readline = require('readline');

// readline 인터페이스 생성
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 입력을 저장할 배열
let input = [];
rl.on('line', function (line) {
    input.push(line);
}).on('close', function () {
    //입력 파싱
    const [M, N, H] = input[0].split(" ").map(Number);  // 첫 번째 입력에서 가로 길이 N을 가져옴
    const tomato = [];
    let idx = 1;

    for (let i = 0; i < H; i++) {
        const layer = [];
        for (let n = 0; n < N; n++) {
            layer.push(input[idx].split(' ').map(Number));
            idx++
        }
        tomato.push(layer)
    }


    //6방향 설정
    const direction = [[1, 0, 0], [0, 1, 0], [0, 0, 1], [-1, 0, 0], [0, -1, 0], [0, 0, -1]]

    //탐색 시작-bfs
    const queue = [];
    for (let i = 0; i < N; i++) { // 세로
        for (let j = 0; j < M; j++) { // 가로
            for (let k = 0; k < H; k++) { // 높이
                if (tomato[k][i][j] == 1) {
                    queue.push([k, i,j]);
                }
            }
        }
    }
    
    let head=0;
    let maxDay=0;
    while (queue.length>head) {
        let [k, i, j] = queue[head++]
        direction.forEach((a) => {
            let nK = k + a[0];
            let nI = i + a[1];
            let nJ = j + a[2];

            if (nK >= 0 && nK < H && nI >= 0 && nI < N && nJ >= 0 && nJ < M
                && tomato[nK][nI][nJ] == 0){
                    tomato[nK][nI][nJ] = tomato[k][i][j]+ 1;
                    queue.push([nK, nI, nJ]);
                }
        })
    }


    for (let i = 0; i < N; i++) { // 세로
        for (let j = 0; j < M; j++) { // 가로
            for (let k = 0; k < H; k++) { // 높이
                if (tomato[k][i][j] >=1) {
                    maxDay=Math.max(maxDay,tomato[k][i][j])
                }else if(tomato[k][i][j] == 0){
                    console.log(-1)
                    return
                }
            }
        }
    }
    if(maxDay==-1){
        console.log(0)
    }else{
        console.log(maxDay-1)

    }

    rl.close();
});
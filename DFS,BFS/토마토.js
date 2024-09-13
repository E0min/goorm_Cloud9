//백준 골드5
//https://www.acmicpc.net/problem/7576
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
    let direction = [[-1, 0], [1, 0], [0, 1], [0, -1]];
    const [M, N] = input[0].split(" ").map(Number);  // 첫 번째 입력에서 가로 길이 N을 가져옴
    const tomato = input.slice(1).map(line => line.split(" ").map(Number)); // 토마토 상자 상태 입력
    let days = Array.from({ length: N }, () => Array(M).fill(0));
    let queue = [];

    //익은 토마토를 모두 queue에 넣는다.
    for (let y = 0; y < N; y++) {
        for (let x = 0; x < M; x++) {
            if (tomato[y][x] == 1) {
                queue.push([x, y]);
                days[y][x] = 0;
            }
        }
    }


    while (queue.length > 0) { // queue에서 토마토를 꺼내면서 BFS시작
        let [x, y] = queue.shift(); //queue에 넣은 것을 꺼낸다.


        direction.forEach(a => {
            let newX = x + a[0];
            let newY = y + a[1];
            if (newX >= 0 && newY >= 0 && 
                newX < M && newY < N && 
                tomato[newY][newX] == 0) {
                queue.push([newX, newY]);
                tomato[newY][newX] = 1;
                days[newY][newX] = days[y][x] + 1;
            }
        })
    }

    // 전부 익었는지 체크; 전부 익었을 때만 totalDay를 min에 저장하고 최소 일자를 구한다.
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (tomato[i][j] == 0) {
                console.log(-1);
                return // 전부 익지 않았다면 다음 토마토 지점으로 넘어감
            } else {
            }
        }
    }

    console.log(Math.max(...days.flat()))

    rl.close();
});
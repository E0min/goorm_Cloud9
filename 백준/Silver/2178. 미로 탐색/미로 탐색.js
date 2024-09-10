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
    let [Y, X] = input[0].split(" ").map(Number); // Y: 행, X: 열
    let maze = Array.from({ length: Y }, () => Array(X).fill(0)); // 미로 초기화
    let visited = Array.from({ length: Y }, () => Array(X).fill(false)); // 방문 여부 초기화
    let distance = Array.from({ length: Y }, () => Array(X).fill(0)); // 거리를 저장하는 배열

    // 미로 정보 입력 처리
    for (let i = 0; i < Y; i++) {
        maze[i] = input[i + 1].split("").map(Number); // 미로 배열에 입력된 값들을 숫자로 변환
    }

    let direction = [[1, 0], [-1, 0], [0, 1], [0, -1]]; // 상, 하, 좌, 우 방향
    let queue = [[0, 0]]; // BFS를 위한 큐
    visited[0][0] = true; // 시작점 방문 처리
    distance[0][0] = 1; // 시작점 거리는 1

    // BFS 시작
    while (queue.length > 0) {
        let [y, x] = queue.shift(); // 큐에서 현재 좌표를 꺼냄

        // 네 방향 탐색
        direction.forEach(([dy, dx]) => {
            let newY = y + dy;
            let newX = x + dx;

            // 유효한 범위이고, 아직 방문하지 않았으며, 이동할 수 있는 칸인 경우
            if (newX >= 0 && newY >= 0 && newX < X && newY < Y && !visited[newY][newX] && maze[newY][newX] === 1) {
                visited[newY][newX] = true; // 방문 처리
                queue.push([newY, newX]); // 큐에 좌표 추가
                distance[newY][newX] = distance[y][x] + 1; // 이동한 거리 갱신
            }
        });
    }

    // 도착 지점의 최단 거리 출력
    console.log(distance[Y - 1][X - 1]);
    rl.close();
});
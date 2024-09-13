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
    const directions = [[-1, 0], [1, 0], [0, 1], [0, -1]];
    const [M, N] = input[0].split(" ").map(Number);  // M: 열, N: 행
    const tomato = input.slice(1).map(line => line.split(" ").map(Number));
    const days = Array.from({ length: N }, () => Array(M).fill(0));
    const queue = [];
    
    // 처음부터 익은 토마토를 모두 큐에 추가하고, 이미 익은 셀을 표시
    for (let y = 0; y < N; y++) {
        for (let x = 0; x < M; x++) {
            if (tomato[y][x] === 1) {
                queue.push([x, y]);
                // days[y][x]는 이미 0으로 초기화되어 있으므로 추가 설정 불필요
            }
        }
    }

    // 효율적인 큐 구현을 위해 front 인덱스 사용
    let front = 0;
    while (front < queue.length) {
        const [x, y] = queue[front++];
        for (const [dx, dy] of directions) {
            const newX = x + dx;
            const newY = y + dy;

            // 경계 체크 및 익지 않은 토마토인지 확인
            if (
                newX >= 0 && newX < M &&
                newY >= 0 && newY < N &&
                tomato[newY][newX] === 0
            ) {
                tomato[newY][newX] = 1; // 익은 상태로 변경하여 중복 방문 방지
                days[newY][newX] = days[y][x] + 1;
                queue.push([newX, newY]);
            }
        }
    }

    let maxDays = 0;
    let allRipe = true;

    // 모든 토마토가 익었는지 확인하고 최대 일수 계산
    for (let y = 0; y < N; y++) {
        for (let x = 0; x < M; x++) {
            if (tomato[y][x] === 0) {
                allRipe = false;
                break;
            }
            if (days[y][x] > maxDays) {
                maxDays = days[y][x];
            }
        }
        if (!allRipe) break;
    }

    if (allRipe) {
        console.log(maxDays);
    } else {
        console.log(-1);
    }

    process.exit();
});
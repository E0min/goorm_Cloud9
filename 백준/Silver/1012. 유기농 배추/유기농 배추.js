const readline = require('readline');

// readline 인터페이스 생성
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
rl.on('line', function (line) {
    input.push(line);
}).on('close', function () {
    let index = 0;
    const T = parseInt(input[index++]);  // 첫 번째 입력: 테스트 케이스 개수

    for (let t = 0; t < T; t++) {
        const [M, N, K] = input[index++].split(' ').map(Number);  // 배추밭의 크기와 배추 위치 개수
        let cabbageField = Array.from({ length: N }, () => Array(M).fill(0));  // N x M 크기의 2차원 배열 생성

        for (let k = 0; k < K; k++) {
            const [X, Y] = input[index++].split(' ').map(Number);  // 배추의 위치
            cabbageField[Y][X] = 1;  // 배추가 있는 위치를 1로 표시
        }

        // 배추 군집을 찾기 위한 DFS 혹은 BFS 함수 작성
        const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];  // 상, 하, 좌, 우
        let visited = Array.from({ length: N }, () => Array(M).fill(false));  // 방문 배열

        function dfs(x, y) {
            visited[y][x] = true;
            for (const [dx, dy] of directions) {
                const nx = x + dx;
                const ny = y + dy;
                if (nx >= 0 && nx < M && ny >= 0 && ny < N && cabbageField[ny][nx] === 1 && !visited[ny][nx]) {
                    dfs(nx, ny);
                }
            }
        }

        // 군집 개수 세기
        let clusters = 0;
        for (let i = 0; i < N; i++) {
            for (let j = 0; j < M; j++) {
                if (cabbageField[i][j] === 1 && !visited[i][j]) {
                    dfs(j, i);
                    clusters++;  // 새로운 군집 발견 시 카운트 증가
                }
            }
        }

        console.log(clusters);  // 각 테스트 케이스별 군집 수 출력
    }
});
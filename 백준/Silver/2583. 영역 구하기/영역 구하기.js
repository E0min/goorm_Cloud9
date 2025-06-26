const readline = require('readline');

// 1. readline 인터페이스 생성
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
rl.on('line', line => {
    input.push(line);
}).on('close', () => {
    // 입력 파싱
    const [M, N, K] = input[0].split(' ').map(Number);
    const points = input.slice(1, K + 1).map(line => line.split(" ").map(Number))
    const area = Array.from({ length: M }, () => Array.from({ length: N }, () => 0)) //가로 N, 세로 M인 2차원 배열 생성
    points.forEach((point) => {
        //area 채우기
        const [x1, y1, x2, y2] = point
        for (let i = x1; i < x2; i++) {
            for (let j = y1; j < y2; j++) {
                area[j][i] = 1
            }
        }
    })

    const visited = Array.from({ length: M }, () => Array.from({ length: N }, () => false)) //가로 N, 세로 M인 2차원 배열 생성
    const dir = [[1, 0], [-1, 0], [0, 1], [0, -1]]
    const result = [];

    //영역 구하기
    //순회하면서 BFS
    for (let m = 0; m < M; m++) {
        for (let n = 0; n < N; n++) {
            if (area[m][n] == 1 || visited[m][n]) {
                continue
            } else {
                let head = 0;
                let queue = [[m, n]];
                let areaWidth = 1;
                visited[m][n] = true
                while (queue.length > head) {
                    const [y, x] = queue[head++];
                    dir.forEach((a) => {
                        const nx = x + a[1];
                        const ny = y + a[0];
                        if (nx >= 0 && nx < N && ny >= 0 && ny < M && !visited[ny][nx] && area[ny][nx] == 0) {
                            visited[ny][nx] = true;
                            areaWidth++;
                            queue.push([ny, nx])
                        }
                    })
                }
                if (areaWidth != 0) {
                    result.push(areaWidth)
                }
            }
        }
    }
    result.sort((a, b) => a - b);
    console.log(result.length);
    console.log(result.join(' '));

});

const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const N = parseInt(input[0],10);
const grid = input.slice(1).map(line => line.split("").map(Number));

// 방문 배열
const visited = Array.from({ length: N }, () => Array(N).fill(false));

// 상하좌우 방향 벡터
const directions = [[1,0], [0,1], [-1,0], [0,-1]];

// BFS 큐
const queue = [];

let apartmentCount = [];

for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        if (!visited[i][j] && grid[i][j] === 1) {
            let count = 0;
            queue.push([i, j]);
            visited[i][j] = true;

            while (queue.length > 0) {
                const [x, y] = queue.shift();
                count++;

                directions.forEach(([dx, dy]) => {
                    const nx = x + dx;
                    const ny = y + dy;

                    if (nx >= 0 && nx < N && ny >= 0 && ny < N && !visited[nx][ny] && grid[nx][ny] === 1) {
                        visited[nx][ny] = true;
                        queue.push([nx, ny]);
                    }
                });
            }

            apartmentCount.push(count);
        }
    }
}


apartmentCount.sort((a, b) => a - b);

console.log(apartmentCount.length);
apartmentCount.forEach(cnt => console.log(cnt));

// BOJ 14502 연구소 - Node.js (BFS + 조합)
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const lab = input.slice(1).map(line => line.split(" ").map(Number));

const dirs = [[1,0],[-1,0],[0,1],[0,-1]];

// 빈 칸과 바이러스 위치 수집
const empties = [];
const viruses = [];
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (lab[i][j] === 0) empties.push([i, j]);
    else if (lab[i][j] === 2) viruses.push([i, j]);
  }
}

let answer = 0;

// 바이러스 퍼뜨리고 안전영역 계산
function simulate(wallA, wallB, wallC) {
  // 얕은 복사로 충분 (8x8)
  const grid = lab.map(row => row.slice());

  // 벽 3개 세우기
  const [ax, ay] = empties[wallA];
  const [bx, by] = empties[wallB];
  const [cx, cy] = empties[wallC];
  grid[ax][ay] = 1;
  grid[bx][by] = 1;
  grid[cx][cy] = 1;

  // BFS로 바이러스 확산
  const q = [];
  let head = 0;
  for (const [vx, vy] of viruses) q.push([vx, vy]);

  while (head < q.length) {
    const [x, y] = q[head++];
    for (const [dx, dy] of dirs) {
      const nx = x + dx, ny = y + dy;
      if (nx >= 0 && nx < N && ny >= 0 && ny < M && grid[nx][ny] === 0) {
        grid[nx][ny] = 2;
        q.push([nx, ny]);
      }
    }
  }

  // 안전 영역(0)의 개수 세기
  let safe = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (grid[i][j] === 0) safe++;
    }
  }
  return safe;
}

// 빈 칸 중 3개 조합 전부 시도
const E = empties.length;
for (let i = 0; i < E - 2; i++) {
  for (let j = i + 1; j < E - 1; j++) {
    for (let k = j + 1; k < E; k++) {
      const safe = simulate(i, j, k);
      if (safe > answer) answer = safe;
    }
  }
}

console.log(answer);

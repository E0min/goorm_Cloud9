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
  // 2. 입력 파싱
  const [n, m] = input[0].split(' ').map(Number);
  const paper = input
    .slice(1)
    .map(line => line.split(' ').map(Number));
  const visited = Array.from({ length: n }, () => Array(m).fill(false));

  // 3. 상·하·좌·우 방향 벡터
  const directions = [
    [-1, 0],  // 위
    [ 1, 0],  // 아래
    [ 0,-1],  // 왼쪽
    [ 0, 1],  // 오른쪽
  ];

  let pictureCount = 0;
  let maxArea = 0;

  // 4. 전체 칸 순회하며 새로운 그림 덩어리 발견 시 DFS
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (paper[i][j] === 1 && !visited[i][j]) {
        pictureCount++;
        let area = 0;

        // 스택 기반 DFS
        const stack = [[i, j]];
        visited[i][j] = true;

        while (stack.length) {
          const [x, y] = stack.pop();
          area++;

          for (const [dx, dy] of directions) {
            const nx = x + dx;
            const ny = y + dy;
            // 경계 체크: 0 ≤ nx < n, 0 ≤ ny < m
            if (
              nx >= 0 && nx < n &&
              ny >= 0 && ny < m &&
              paper[nx][ny] === 1 &&
              !visited[nx][ny]
            ) {
              visited[nx][ny] = true;
              stack.push([nx, ny]);
            }
          }
        }

        maxArea = Math.max(maxArea, area);
      }
    }
  }

  // 5. 결과 출력
  console.log(pictureCount);
  console.log(maxArea);
});

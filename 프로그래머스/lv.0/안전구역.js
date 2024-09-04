function solution(board) {
  let n = board.length;
  let dangerMap = [
      [-1, -1],[0, -1],[1, -1],
      [-1, 0], [0, 0], [1, 0],
      [-1, 1], [0, 1], [1, 1]
  ];
  let danger = Array.from({length: n}, () => Array(n).fill(0));
  let dangerCount = 0;

  for (let y = 0; y < n; y++) {
    for (let x = 0; x < n; x++) {
      if (board[x][y] === 1) {
        dangerMap.map(([danX, danY]) => {
          let newX = danX + x;
          let newY = danY + y;

          if (newX >= 0 && newX < n && newY >= 0 && newY < n) {
            if (danger[newX][newY] !== 1) {
              danger[newX][newY] = 1;
              dangerCount++;
            }
          }
        });
      }
    }
  }
  return n * n - dangerCount;
}
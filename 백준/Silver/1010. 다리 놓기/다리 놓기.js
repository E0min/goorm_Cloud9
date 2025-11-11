const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = Number(input[0]);
const testCases = input.slice(1).map((line) => line.split(" ").map(Number));

// 1. DP 테이블 (30x30)을 미리 계산 (최대 29 C 29 까지)
// dp[m][n] = mCn
const dp = Array.from({ length: 30 }, () => Array(30).fill(0));

for (let m = 0; m < 30; m++) {
  // 2. 기저 상태(Base Case) 설정
  dp[m][0] = 1; // mC0 = 1
  dp[m][m] = 1; // mCm = 1
}

// 3. 점화식(파스칼의 삼각형)으로 테이블 채우기
for (let m = 2; m < 30; m++) {
  for (let n = 1; n < m; n++) {
    // dp[m][n] = dp[m-1][n-1] + dp[m-1][n]
    dp[m][n] = dp[m - 1][n - 1] + dp[m - 1][n];
  }
}

// 4. 각 테스트 케이스에 대해 미리 계산된 DP 테이블 값을 조회
const results = [];
for (const [N, M] of testCases) {
  // N과 M (입력 순서)에 주의 -> mCn 이므로 dp[M][N]
  results.push(dp[M][N]);
}

console.log(results.join("\n"));
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [C, N] = input[0].split(" ").map(Number);
const cost_val = input.slice(1).map(a => a.split(" ").map(Number));

// 1. 배열 크기 수정: 최대 비용(100,000)까지 커버해야 함
// (목표 고객 1000명 * 최악의 가성비 100원 = 100,000원)
const MAX_COST = 100000;
const dp = Array(MAX_COST + 1).fill(0);

// dp[i] : 비용 i를 썼을 때 얻을 수 있는 최대 고객 수

for (let j = 0; j < N; j++) {
    const cost = cost_val[j][0];
    const value = cost_val[j][1];
    
    // 2. 반복 범위 수정: 1000이 아니라 MAX_COST까지
    for (let i = cost; i <= MAX_COST; i++) {
        dp[i] = Math.max(dp[i], dp[i - cost] + value);
    }
}

// 3. 정답 출력: 0원부터 비용을 늘려가며 확인하므로
// 가장 먼저 C명을 넘기는 i가 최소 비용임.
for (let i = 0; i <= MAX_COST; i++) {
    if (dp[i] >= C) {
        console.log(i);
        return;
    }
}
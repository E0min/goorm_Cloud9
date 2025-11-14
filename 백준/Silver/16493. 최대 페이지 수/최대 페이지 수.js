const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

//N: 남은 기간 , M: 챕터 수
const [N, M] = input[0].split(" ").map(Number);

const costs = []
const gains = []

for (let i = 1; i < M+1; i++) {
    const [c, g] = input[i].split(" ").map(Number);
    costs.push(c);
    gains.push(g)
}

// 배낭 알고리즘
const dp = Array(N + 1).fill(0);

//dp[소모한 날자] = 최대 읽은 페이지
for (let i = 0; i < M; i++) {
    for (let j = N; j > 0; j--) {
        if (j - costs[i] >= 0) {
            dp[j] = Math.max(dp[j], dp[j - costs[i]] + gains[i]);
        }
    }
}
console.log(dp[N])
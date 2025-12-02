const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

//곡개수, 시작 볼륨, 맥스볼륨
//const [N, S, M] = input[0].split(" "); 일때 잘못 나온 이유 확인해보기

const sosu = [2, 3, 5, 7, 11, 13, 17];

const A_pro = Number(input[0] / 100);
const B_pro = Number(input[1] / 100);

const dpA = Array.from({ length: 19 }, () => Array(19).fill(0))
const dpB = Array.from({ length: 19 }, () => Array(19).fill(0))

// dp[i+1][j+1] = dp[i-1][j-1]*P + dp[i-i][j]*(1-P)

//시작 상태 초기화
dpA[0][0] = 1
dpB[0][0] = 1

//i는 5분 섹터, j는 점수
for (let i = 0; i < 18; i++) {
    for (let j = 0; j <= i; j++) {
        if (dpA[i][j] > 0) {
            dpA[i + 1][j + 1] += dpA[i][j] * A_pro; // 골 넣음
            dpA[i + 1][j] += dpA[i][j] * (1 - A_pro) // 골 못넣음
        }

        if (dpB[i][j] > 0) {
            dpB[i + 1][j + 1] += dpB[i][j] * B_pro;
            dpB[i + 1][j] += dpB[i][j] * (1 - B_pro);
        }
        // dpA[i + 1][j + 1] = dpA[i][j] * A_pro + dpA[i][j + 1] * (1 - A_pro)
        // dpB[i + 1][j + 1] = dpB[i][j] * B_pro + dpB[i][j + 1] * (1 - B_pro)

    }
}

//A와 B가 둘 다 소수가 아닐 확률을 구하기
let ProbA = 0;
let ProbB = 0;
for (let j = 0; j < 19; j++) {
    if (!sosu.includes(j)) {
        ProbA += dpA[18][j]
        ProbB += dpB[18][j]

    }

}

console.log(1 - ProbA * ProbB)


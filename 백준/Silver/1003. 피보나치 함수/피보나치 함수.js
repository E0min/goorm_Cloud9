const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// T는 테스트 케이스 '개수'
const T = Number(input[0]);
// testCases는 [0, 1, 3, 22] 등 N의 '값'들
const testCases = input.slice(1).map(Number);

// 1. N의 최대값(40)을 기준으로 테이블을 만든다. (T+1이 아님!)
const maxN = 40;
const dp = Array.from({ length: maxN + 1 }, () => [0, 0]);

// 2. 기저 상태(초기값)를 테이블에 *직접* 설정한다.
dp[0] = [1, 0];
if (maxN > 0) { // N=0만 들어올 경우를 대비한 방어 코드
    dp[1] = [0, 1];
}

// 3. 반복문으로 테이블 전체를 *단 한 번만* 채운다. (i=2 부터 maxN 까지)
// 이것이 '타뷸레이션'의 핵심이다.
for (let i = 2; i <= maxN; i++) {
    // 사용하신 점화식은 정확합니다.
    dp[i][0] = dp[i - 1][0] + dp[i - 2][0];
    dp[i][1] = dp[i - 1][1] + dp[i - 2][1];
}

// 4. T개의 테스트 케이스를 순회하며 *미리 계산된* 답을 O(1)로 조회한다.
const results = [];
for (const N of testCases) {
    // 함수를 호출해 계산하는 것이 아니라, 배열에서 값을 바로 꺼낸다.
    results.push(dp[N].join(" "));
}

// T개의 답을 한 번에 출력 (성능상 더 좋음)
console.log(results.join("\n"));
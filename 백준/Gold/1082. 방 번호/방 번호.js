const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

// 1. 입력 파싱 수정
const N = Number(input[0]);
const P = input[1].split(" ").map(Number);
const M = Number(input[2]);

// dp[i] : i원을 썼을 때 만들 수 있는 가장 큰 수
// 초기값을 null로 하여 '아직 못 만든 상태'를 표시
const dp = Array(M + 1).fill(null);

// 0원으로는 아무것도 없는 상태("")를 만듦
dp[0] = "";

for (let j = 0; j <= M; j++) {
    // 현재 금액 j를 만들 방법이 없으면 건너뜀
    if (dp[j] === null) continue;

    for (let i = 0; i < N; i++) {
        const price = P[i];
        const nextCost = j + price;

        if (nextCost <= M) {
            // 2. Leading Zero 처리 (0으로 시작 방지)
            // 기존 숫자가 빈 문자열("")이거나 "0"이면, 그냥 새 숫자(i)로 교체
            // (예: "0" + "5" -> "5")
            let newNumber;
            if (dp[j] === "" || dp[j] === "0") {
                newNumber = String(i);
            } else {
                newNumber = dp[j] + String(i);
            }
            
            // 비교 대상 (기존에 nextCost로 만든 숫자)
            const oldNumber = dp[nextCost];

            // 3. 비교 로직 수정 (길이 비교 -> 문자열 비교)
            dp[nextCost] = getBigger(oldNumber, newNumber);
        }
    }
}

// 문자열 대소 비교 함수
function getBigger(a, b) {
    if (a === null) return b;
    if (b === null) return a;
    
    // 길이가 길면 무조건 큼
    if (a.length > b.length) return a;
    if (b.length > a.length) return b;
    
    // 길이가 같으면 사전 순으로 큰 것이 큼 ("9" > "8")
    if (a > b) return a;
    return b;
}

// 예산 M원을 꼭 다 써야 최대가 나오는 건 아니므로 전체 확인
let maxAns = "0";
for (let i = 0; i <= M; i++) {
    if (dp[i] !== null) {
        maxAns = getBigger(maxAns, dp[i]);
    }
}

console.log(maxAns);
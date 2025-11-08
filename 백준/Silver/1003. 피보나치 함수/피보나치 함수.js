const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// 1. input 배열에서 첫 번째 요소(테스트 케이스 수 T)를 빼냅니다.
const T = Number(input[0]);

// 2. N 값들을 숫자로 변환합니다.
const testCases = input.slice(1).map(Number);

/* 1. 메모이제이션(탑 다운)방식 */

// [수정 1] memo 배열의 크기는 T가 아니라 N의 최대값(40)을 기준으로 생성합니다.
const maxN = 40; 
const memo = Array.from({ length: maxN + 1 }, () => [-1, -1]);

function fibo1(n) {
    // 1. 메모가 되어있으면 바로 반환
    if (memo[n][0] !== -1 && memo[n][1] !== -1) {
        return memo[n];
    }
    
    // 2. 기저 조건 처리
    if (n === 0) {
        memo[0] = [1, 0];
        return memo[0];
    }
    if (n === 1) {
        memo[1] = [0, 1];
        return memo[1];
    }
    
    // 3. 재귀 호출 및 메모
    const [n1, n2] = fibo1(n - 1);
    const [n3, n4] = fibo1(n - 2);
    
    memo[n] = [n1 + n3, n2 + n4];
    return memo[n];
}

// [수정 2] 출력 형식을 [1, 2]가 아닌 "1 2"로 맞춥니다.
testCases.forEach((a) => {
    const result = fibo1(a);
    console.log(result.join(" ")); // .join(" ") 사용
});
const fs = require("fs");
// 0번 파일 디스크립터 대신 표준 입력 경로인 /dev/stdin을 사용하는 것이 좋습니다.
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// 1. input 배열에서 첫 번째 요소(테스트 케이스 수 T)를 빼냅니다.
// .shift()는 배열의 첫 번째 요소를 제거하고 그 값을 반환합니다.
const T = Number(input[0]);
const MOD = 9901; // Modulo 값을 상수로 빼기

const arr = Array.from({ length: T + 1 }, () => [0, 0, 0] )

arr[1][0] = 1
arr[1][1] = 1
arr[1][2] = 1

for (let i = 2; i <= T; i++) {
    arr[i][0] = (arr[i - 1][0] + arr[i - 1][1] + arr[i - 1][2]) % MOD;
    arr[i][1] = (arr[i - 1][0] + arr[i - 1][2]) % MOD;
    arr[i][2] = (arr[i - 1][0] + arr[i - 1][1]) % MOD;
}

let answer = (arr[T][0]+arr[T][1]+arr[T][2])% MOD

console.log(answer)
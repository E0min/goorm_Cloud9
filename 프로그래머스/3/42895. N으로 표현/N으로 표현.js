function solution(N, number) {
    if (N === number) return 1;  // 기본적인 경우

    let dp = Array.from({ length: 9 }, () => new Set());
    dp[1].add(N);  // dp[1]에는 N만 포함

    // dp 집합을 2부터 8까지 생성
    for (let i = 2; i <= 8; i++) {
        // N을 i번 반복한 숫자를 추가 (예: 55, 555, ...)
        dp[i].add(Number(N.toString().repeat(i)));

        // 이전 dp 집합들을 사용하여 dp[i] 생성
        for (let j = 1; j < i; j++) {
            for (let num1 of dp[j]) {
                for (let num2 of dp[i - j]) {
                    dp[i].add(num1 + num2);
                    dp[i].add(num1 - num2);
                    dp[i].add(num1 * num2);
                    if (num2 !== 0) dp[i].add(Math.floor(num1 / num2));  // 나눗셈은 0으로 나누지 않도록 처리
                }
            }
        }

        // 목표 숫자가 dp[i]에 있으면 i를 반환
        if (dp[i].has(number)) return i;
    }

    return -1;  // 8번의 연산 내에 찾지 못하면 -1 반환
}


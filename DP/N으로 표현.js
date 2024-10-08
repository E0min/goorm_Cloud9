
function solution(N, number) {

    // N과 number가 같으면 바로 1 반환
    if (N === number) return 1;

    let dp = Array.from({ length: 9 }, () => new Set());
    dp[1].add(N); // dp[1]에는 N만 포함

    // dp 집합을 2부터 8까지 생성
    for (let i = 2; i <= 8; i++) {
        // N을 i번 반복한 숫자를 추가 (예: 55, 555, ...)
        dp[i].add(Number(N.toString().repeat(i)));

        for (let j = 1; j < i; j++){
            for(let num1 of dp[j]){
                for(let num2 of dp[i-j]){
                    dp[i].add(num1+num2);
                    dp[i].add(num1-num2);
                    dp[i].add(Math.floor(num1/num2));
                    dp[i].add(num1*num2);

                }
            }
        }
        if(dp[i].has(number)){return i}
    }
    return -1
}


function solution(N, number) {
  // 중복 값을 제거하기 위해 배열의 요소를 set로 구성
  const dp = Array.from({ length: 9 }, () => new Set());
  dp[1].add(N);
  
  for(let i = 1; i < 9; i++){ // i는 1부터 8까지 반복
      dp[i].add(parseInt(N.toString().repeat(i))); // 숫자 이어 붙이기
      
      // 숫자 연산 
      for(let j = 1; j < i; j++){ // j는 1부터 i - 1까지 반복 
          for(let num1 of dp[j]){ // dp[j]에 있는 모든 값을 num1에 저장 후 반복
              for(let num2 of dp[i - j]){  // dp[i - j]에 있는 모든 값을 num2에 저장 후 반복
                  dp[i].add(num1 + num2);
                  dp[i].add(num1 - num2);
                  dp[i].add(num1 * num2);
                  dp[i].add(Math.floor(num1 / num2));
              }
          }
      }
      
      if(dp[i].has(number)){ // dp[i]에 number가 있으면 i 반환
          return i;
      }
  }
  
  return -1; // 없으면 -1 반환
}

/*  i는 1부터 시작하긴 하지만, j < i 부분의 조건을 만족하지 못하므로 루프 실행 ㅌ
  즉, i가 2일 때부터 루프가 돌아간다.
  
  i = 2, j = 1, dp[1], dp[1] 
  i = 3, j = 1, dp[1], dp[2]
  i = 3, j = 2, dp[2], dp[1]
  i = 4, j = 1, dp[1], dp[3]
  i = 4, j = 2, dp[2], dp[2]
  i = 4, j = 3, dp[3], dp[1]
  
  순으로 돌아감
*/
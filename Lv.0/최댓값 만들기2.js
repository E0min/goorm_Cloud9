//https://school.programmers.co.kr/learn/courses/30/lessons/120862

// 내 풀이
function solution(numbers) {
  let arr = numbers.sort((a, b) => a - b);

  // 양수일 경우
  let max1 = arr[arr.length - 1];
  let max2 = arr[arr.length - 2];

  //음수일 경우
  let min1 = arr[0];
  let min2 = arr[1];

  //양수끼리 곱과 음수끼리 곱 중에 더 큰 값 반환
  let ans = Math.max(max1 * max2, min1 * min2);

  return ans;
}

// 참고
function solution(numbers) {
  numbers.sort((a, b) => a - b);
  return Math.max(
    numbers[0] * numbers[1],
    numbers[numbers.length - 1] * numbers[numbers.length - 2]
  );
}

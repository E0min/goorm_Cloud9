// https://school.programmers.co.kr/learn/courses/30/lessons/120860

function solution(dots) {
  let ans = 0;

  let xList = dots.map((num) => num[0]).sort((a, b) => a - b); // map으로 배열의 index0인것들 다 가져옴
  let x = xList[3] - xList[0];

  let yList = dots.map((num) => num[1]).sort((a, b) => a - b);
  let y = yList[3] - yList[0];

  return x * y;
}

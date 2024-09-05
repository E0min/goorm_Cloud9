//https://school.programmers.co.kr/learn/courses/30/lessons/120808

function solution(numer1, denom1, numer2, denom2) {
  let denom = denom1 * denom2;
  let num = denom2 * numer1 + denom1 * numer2;

  const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
  const getgcd = gcd(denom, num);

  return [num / getgcd, denom / getgcd];
}

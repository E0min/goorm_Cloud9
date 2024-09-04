function solution(a, b) {
  let g = 1; //최대 공약수 저장

  //최대 공약수 찾기
  for (let i = 1; i <= a; i++) {
    if (a % i === 0 && b % i === 0) g = i;
  }

  //분모 최대 공약수로 약분하기
  b /= g;

  //2와 5로만 나눠지는 수인지 판별 => 1이면 유한소수, 그외 정수면 무한소수
  while (b % 2 === 0) b /= 2;
  while (b % 5 === 0) b /= 5;

  return b === 1 ? 1 : 2;
}

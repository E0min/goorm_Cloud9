function solution(arr){
  let answer = arr.filter((val, idx) => idx === 0 || arr[idx - 1] !== val);
  return answer;
}
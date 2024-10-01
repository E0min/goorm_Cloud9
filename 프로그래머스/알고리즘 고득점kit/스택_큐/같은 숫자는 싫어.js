function solution(arr){
  // stack 사용
  // 메모리: 83.3 MB, 시간: 45.73 ms / 정확성: 71.9 효율성: 28.1
  const stack = [arr[0]];
  const len = arr.length;
  
  for(let i = 1; i < len; i++){
      if(arr[i] !== arr[i - 1]){
          stack.push(arr[i]);
      }
  }
  return stack;
}

// filter 사용
// 메모리: 83 MB, 시간: 51.03 ms / 정확성: 71.9 효율성: 28.1
// return arr.filter((val,index) => val !== arr[index+1]);


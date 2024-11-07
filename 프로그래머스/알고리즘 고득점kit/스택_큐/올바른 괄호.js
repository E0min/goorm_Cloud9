function solution(s) {
  let stack = [];

  for (let char of s) {
    if (char === "(") {
      stack.push(char);
    } else {
      if (stack.length === 0) {
        return false;
      } else {
        stack.pop();
      }
    }
  }

  return stack.length === 0 ? true : false;
}

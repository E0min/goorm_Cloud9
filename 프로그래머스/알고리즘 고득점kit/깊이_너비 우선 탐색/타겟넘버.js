function solution(numbers, target) {
  let count = 0;
  dfs(0, 0);

  function dfs(sum, index) {
    if (index === numbers.length) {
      if (sum === target) {
        count++;
      }

      return;
    }

    dfs(sum + numbers[index], index + 1);
    dfs(sum - numbers[index], index + 1);
  }

  return count;
}

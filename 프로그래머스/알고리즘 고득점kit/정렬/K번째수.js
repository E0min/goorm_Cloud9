function solution(array, commands) {
  return commands.map(([start, end, idx]) => {
      return array.slice(start - 1, end).sort((a, b) => a - b).at(idx - 1);
  })
}
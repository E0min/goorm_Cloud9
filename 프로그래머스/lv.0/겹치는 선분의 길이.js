function solution(lines) {
  const countArr = Array(200).fill(0);
  
  lines.forEach(([start,end]) => {
      while(start < end){
          countArr[start + 100]++;
          start++;
      }
  })
  
  return countArr.filter(count => count > 1).length;
}
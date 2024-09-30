function solution(nums) {
  let get = Math.floor(nums.length / 2);
  let hashMap = new Map();
  
  nums.forEach(name => {
      hashMap.set(name, (hashMap.get(name) || 0) + 1);
  })
  
  return Math.min(hashMap.size, get);
}
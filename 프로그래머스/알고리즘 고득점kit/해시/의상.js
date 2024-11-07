function solution(clothes) {
  let hash = {};
  let clothesCombination = 1;

  clothes.forEach(([item, category]) => {
    hash[category] = (hash[category] || 0) + 1;
  });

  for (let count in hash) {
    clothesCombination *= hash[count] + 1;
  }

  return clothesCombination - 1;
}

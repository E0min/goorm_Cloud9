function solution(spell, dic) {
  for (let word of dic) {
    let count = 0;

    for (let alpha of spell) {
      if (word.includes(alpha)) {
        count++;
      }

      if (count === spell.length) {
        return 1;
      }
    }
  }
  return 2;
}

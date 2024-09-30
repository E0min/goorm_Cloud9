function solution(name, yearning, photo) {
  return photo.map((list) =>
    list
      .map((val) => {
        let index = name.indexOf(val);
        return index !== -1 ? yearning[index] : 0;
      })
      .reduce((sum, num) => (sum += num))
  );
}

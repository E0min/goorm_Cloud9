function solution(n, lost, reserve) {
  // 여벌 체육복을 가져온 학생이 도난 당함 -> lost와 reserve에서 제거
  let lostArr = lost.filter((student) => !reserve.includes(student));
  let reserveArr = reserve.filter((student) => !lost.includes(student));

  //정렬
  lostArr = lostArr.sort((a, b) => a - b);
  reserveArr = reserveArr.sort((a, b) => a - b);

  // 도난 당한 학생에게 빌려주기
  for (let i = 0; i < reserveArr.length; i++) {
    let reserver = reserveArr[i];
    let index = lostArr.findIndex(
      (num) => num === reserver - 1 || num === reserver + 1
    );

    if (index !== -1) {
      lostArr.splice(index, 1);
    }
  }

  return n - lostArr.length;
}

function solution(phone_book) {
  let hashMap = new Map();

  // 번호 자체를 키로 저장
  phone_book.forEach((phone) => {
    hashMap.set(phone, true);
  });

  // 각 번호에 대해 접두사가 해시맵에 있는지 확인
  for (let phone of phone_book) {
    for (let i = 1; i < phone.length; i++) {
      let prefix = phone.slice(0, i);
      if (hashMap.has(prefix)) {
        return false;
      }
    }
  }

  return true;
}

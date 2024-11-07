function solution(answers) {
  let [s1, s2, s3] = ["12345", "21232425", "3311224455"];
  let students = { 1: 0, 2: 0, 3: 0 };
  let answer = [];

  answers.forEach((answer, idx) => {
    answer = answer.toString();

    if (s1[idx % s1.length] === answer) students[1]++;
    if (s2[idx % s2.length] === answer) students[2]++;
    if (s3[idx % s3.length] === answer) students[3]++;
  });

  //최대 점수 찾기
  let max = Math.max(...Object.values(students));

  // 최대 점수인 학생 찾기
  for (let num in students) {
    if (students[num] === max) {
      answer.push(parseInt(num));
    }
  }

  return answer;
}

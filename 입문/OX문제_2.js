//https://school.programmers.co.kr/learn/courses/30/lessons/120907?language=javascript
function solution(quiz) {
    return quiz.map(a=>{
        const [left,right] = a.split("=");
        return eval(left)==right?"O":"X";
    })
}

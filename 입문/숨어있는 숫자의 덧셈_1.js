//https://school.programmers.co.kr/learn/courses/30/lessons/120864?language=javascript#
function solution(my_string) {
    var answer = 0;
    if((answer = my_string.match(/\d+/g))===null){
        return 0;
    }
    return     answer.map(a=>Number(a)).reduce((a,b)=>{return a+b},0);
}

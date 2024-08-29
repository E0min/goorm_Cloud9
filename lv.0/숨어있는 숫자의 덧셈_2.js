//https://school.programmers.co.kr/learn/courses/30/lessons/120864?language=javascript#
function solution(my_string) {
    var sum = 0;
    var index = 0;
    var curNum=0;

    while(index<my_string.length){
        var preNum=0; // 이게 실행된다는 것은 이전이 문자였다는 것, 고로 이전 숫자는 0이다.
        while(!isNaN(my_string[index])){ // 현재 인덱스의 값이 숫자일 경우
            curNum = Number(preNum)*10 + Number(my_string[index]);
            preNum = curNum;
            index++; 
        }
        console.log(curNum);
        sum = Number(sum) + Number(curNum);
        curNum=0;
        index++;
    }
    return sum;
}
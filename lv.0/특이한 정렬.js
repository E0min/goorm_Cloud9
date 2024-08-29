//https://school.programmers.co.kr/learn/courses/30/lessons/120880
function solution(numlist, n) {
    var answer = [];
    answer = numlist.sort((a,b)=>{
       if(Math.abs(a-n)===Math.abs(b-n)){
           return b-a
       }else{
          return Math.abs(a-n)-Math.abs(b-n)
       } 
    })                  
    return answer
}
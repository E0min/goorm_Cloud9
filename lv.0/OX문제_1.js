//https://school.programmers.co.kr/learn/courses/30/lessons/120907?language=javascript
function solution(quiz) {
    var answer = [];
    var Arrquiz = new Array(quiz.length);
    for(var i = 0 ;i<quiz.length;i++){
        Arrquiz[i] = quiz[i].split(" ");
    }
    Arrquiz.forEach(a=>{
        if(cal(a[0],a[1],a[2])==a[4]){
            answer.push("O");
        }else{
            answer.push("X");
        }
    })
    return answer;
}

function cal(a,oper,b){
    if(oper==="-"){
        return Number(a)-Number(b);
    }else if(oper==="+"){
        return Number(a)+Number(b);
        
    }
}
//https://school.programmers.co.kr/learn/courses/30/lessons/120876
function solution(lines) {
    var answer = 0;
    var arr = new Array(201).fill(0);
    lines.forEach(line=>{
        for(var i = line[0]+100;i<line[1]+100;i++){
            arr[i]++;
        }
    });
    arr.forEach(a=>{
        if(a>1){
            answer++;
        }
    })
    return answer;
}
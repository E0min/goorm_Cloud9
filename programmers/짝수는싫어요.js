function solution(n) {
    var answer = [];
    for(var i = 0; i < n; i++){
        if((i+1) % 2 != 0){
            answer.push(i+1);
        }
    }
    return answer;
}
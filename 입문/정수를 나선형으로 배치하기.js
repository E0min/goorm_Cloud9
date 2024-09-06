//https://school.programmers.co.kr/learn/courses/30/lessons/181832
function solution(n) {
    
    let rows = n;
    let cols = n;
    let answer = new Array(rows);

    for (let i = 0; i < rows; i++) {
        answer[i] = new Array(cols).fill(0); // 모든 값을 0으로 초기화
    }

    var start_index=0;
    var end_index = n-1;
    var count = 1;
    
    
    while(start_index<end_index){
        
        for(var j = start_index; j<end_index ;j++){
            answer[start_index][j] = count;
            count= count+1;
            console.log(answer[start_index][j],end_index)
        }
        for(var i = start_index;i<end_index;i++){
            answer[i][end_index] = count;
            count= count+1;
            console.log(answer[i][end_index],end_index)
        }
        for(var j = end_index; j>start_index ;j--){
            answer[end_index][j] = count;
            count= count+1;
            console.log(answer[end_index][j],end_index)

        }
        for(var i = end_index ;i>start_index; i--){
            answer[i][start_index] = count;
            count= count+1;
            console.log(answer[i][start_index],end_index)
        }
        
        end_index--;
        start_index++;
        
    }  
    
    if(end_index===start_index){ // n이 홀수인 경우에 마지막 예외 처리
            answer[start_index][start_index] = count;
        }
    return answer;
}
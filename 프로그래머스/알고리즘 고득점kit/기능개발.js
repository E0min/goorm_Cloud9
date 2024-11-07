function solution(progresses, speeds) {
    let queue = progresses.map((program, i) => Math.ceil((100 - program) / speeds[i])); // 진도가 100이 될 때까지 걸리는 기간
    let answer = []; 
    
    let target = queue[0];
    let count = 0;
    
    while(queue.length){
        if(target >= queue[0]){
            count++;
            queue.shift();

            // 큐가 비었을 때, 마지막 count를 처리
            if(queue.length === 0){
                answer.push(count);
            }
        }else{
            answer.push(count);
            target = queue[0];
            count = 0;
        }
    }
    
    return answer;
}

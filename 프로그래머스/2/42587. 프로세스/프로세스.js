function solution(priorities, location) {
    let answer=0;
    let readyQueue = priorities.map((value,index)=>({value,index}));
    //큐가 빌 때까지 반복
    while(readyQueue.length>0){
        let process = readyQueue.shift();
        
        if(readyQueue.some((queue) => process.value < queue.value)){
            readyQueue.push(process);
        }else{
            answer++
            if(process.index==location) return answer
        }
        
    }
}
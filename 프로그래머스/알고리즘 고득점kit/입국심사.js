function solution(n, times) {
    let min = 1; // 최소 소요시간
    let max = Math.max(...times) * n; // 최대 소요시간
    let mid; //평균 시간
    let totalPeople; // 주어진 시간 동안 처리할 수 있는 총 사람 수
    
    while(min <= max){
        mid = Math.floor((min + max) / 2); //평균 시간
        totalPeople = times.reduce((acc, time) => acc + Math.floor(mid / time), 0);
        
        if(totalPeople >= n){
            max = mid - 1;
        }else{
            min = mid + 1;
        }
    }
    
    return min;
}

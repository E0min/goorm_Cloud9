function solution(n, lost, reserve) {
    
    let newReserve = reserve.filter(item => !lost.includes(item)); // 여벌학생
    let newLost = lost.filter(item => !reserve.includes(item)); // 도난학생
    
    let ans = n-newLost.length; // 결과값
    
    newReserve.sort((a, b) => a - b);
    newLost.sort((a, b) => a - b);
    
    for(let i=0; i<newLost.length; i++){
        let index = newReserve.findIndex(a => Math.abs(a - newLost[i])===1);
        if(index !== -1){ // findIndex는 없을시 -1 반환
            ans++;
            newReserve.splice(index, 1); // 여벌 빌려준 학생 제거
        }
    }
    return ans;
}

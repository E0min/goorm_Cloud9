//프로그래머스_lv.1
//
function solution(n, lost, reserve) {
    var answer = 0;
    let recover=0;

    // 도난당한 학생이 여벌이 있는 경우 제거
    let realLost = lost.filter(l => !reserve.includes(l)); //필터
    let realReserve = reserve.filter(r => !lost.includes(r)); // 필터

    realLost.sort((a,b) => a-b); //정렬
    realReserve.sort((a,b) => a-b); //정렬

    for(let i = 0 ; i < realLost.length ; i++){ // 이중반복문을 통해 체육복 빌려주기
        for(let j = 0 ; j < realReserve.length ; j++){
            if(Math.abs(realLost[i] - realReserve[j]) <= 1){
                realReserve[j] = -1; // 빌려줬음을 표시
                recover++;
                break;
            }
        }
    }
    answer = n - realLost.length + recover;
    return answer;
}
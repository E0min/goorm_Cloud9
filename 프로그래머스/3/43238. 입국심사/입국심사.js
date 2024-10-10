function solution(n, times) {
    let left = 1;
    let right = Math.max(...times) * n;
    let answer = right;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        // 현재 mid 시간에서 처리할 수 있는 최대 인원 수 계산
        let totalPeople = 0;
        
        for (let time of times) {
            totalPeople += Math.floor(mid / time);
            if (totalPeople >= n) { // 이미 n명을 넘으면 더 이상 계산할 필요 없음
                break;
            }
        }

        if (totalPeople >= n) { // 처리할 수 있는 사람이 충분하거나 많다면 시간을 줄여본다.
            answer = mid; // 가능한 시간 후보 중 최소값을 찾기 위해 업데이트
            right = mid - 1;
        } else { // 처리할 수 있는 사람이 부족하다면 시간을 늘린다.
            left = mid + 1;
        }
    }
    
    return answer;
}

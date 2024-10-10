function solution(n, times) {
    let left = 1;
    let right = Math.max(...times) * n;
    let answer = right; // 최소 시간을 저장할 변수 초기화

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

        if (totalPeople >= n) {
            // 가능한 최소 시간을 찾기 위해 answer를 업데이트
            if (mid < answer) {
                answer = mid;
            }
            // 시간을 더 줄여서 더 작은 최소 시간이 있는지 확인
            right = mid - 1;
        } else {
            // 시간을 늘려서 더 많은 사람을 처리할 수 있게 함
            left = mid + 1;
        }
    }

    return answer;
}

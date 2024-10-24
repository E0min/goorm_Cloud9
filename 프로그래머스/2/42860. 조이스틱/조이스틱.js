function solution(name) {
    let answer = 0;  // 최종적으로 반환할 결과 (조이스틱 이동 횟수)
    const n = name.length;  // 이름의 길이

    // 1. 각 문자의 변경 횟수 계산
    // 각 문자를 'A'에서 원하는 문자로 변경하는 최소 횟수 계산
    for (let i = 0; i < n; i++) {
        const charCode = name.charCodeAt(i);
        // 'A'와의 차이를 위로 가는 방식과 아래로 가는 방식 중 작은 값 선택
        const up = charCode - 'A'.charCodeAt(0); // 위로 가는 경우
        const down = 'Z'.charCodeAt(0) - charCode + 1; // 아래로 가는 경우
        answer += Math.min(up, down);  // 위/아래 중 최소 이동 횟수 선택
    }

    // 2. 커서 이동 최소 횟수 계산
    let minMove = n - 1; // 오른쪽으로만 끝까지 가는 경우를 기본값으로 설정

    for (let i = 0; i < n; i++) {
        let next = i + 1;
        // 연속된 'A'를 건너뛰기 위한 처리
        // next를 증가시키며 연속된 'A'를 찾음
        while (next < n && name[next] === 'A') {
            next++;
        }

        // 오른쪽으로 갔다가 다시 왼쪽으로 돌아오는 경우를 계산
        // 오른쪽으로 i까지 가고, 다시 왼쪽으로 돌아가서 next부터 처리하는 방식
        minMove = Math.min(minMove, i + n - next + Math.min(i, n - next));
    }

    // 3. 최소 커서 이동 횟수를 결과에 더함
    answer += minMove;

    return answer;
}

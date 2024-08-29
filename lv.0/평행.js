function solution(dots) {
    // 기울기를 계산하는 함수
    function getSlope(dot1, dot2) {
        const dx = dot2[0] - dot1[0];
        const dy = dot2[1] - dot1[1];
        return dy / dx;
    }

    // 세 가지 조합에 대해 직선의 기울기를 비교
    const case1 = getSlope(dots[0], dots[1]) === getSlope(dots[2], dots[3]);
    const case2 = getSlope(dots[0], dots[2]) === getSlope(dots[1], dots[3]);
    const case3 = getSlope(dots[0], dots[3]) === getSlope(dots[1], dots[2]);

    // 세 가지 중 하나라도 평행하면 1을 반환
    return case1 || case2 || case3 ? 1 : 0;
}
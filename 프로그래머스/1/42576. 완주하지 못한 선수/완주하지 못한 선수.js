function solution(participant, completion) {
    const map = new Map();

    // 1. 참가자 목록을 해시맵에 저장
    for (const person of participant) {
        map.set(person, (map.get(person) || 0) + 1);
    }

    // 2. 완주한 사람의 이름을 해시맵에서 감소
    for (const person of completion) {
        map.set(person, map.get(person) - 1);
    }

    // 3. 남은 사람이 완주하지 못한 사람
    for (const [key, value] of map) {
        if (value > 0) {
            return key;
        }
    }

    return ''; // 모든 사람이 완주한 경우 (문제의 조건에 따르면 이 경우는 없음)
}

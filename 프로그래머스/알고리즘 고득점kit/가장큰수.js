function solution(numbers) {
    const answer =  [...numbers]
        .map(item => item.toString())
        .sort((a, b) => (b + a) - (a + b))
        .join('');
    
    return answer[0] === '0' ? '0' : answer;
}

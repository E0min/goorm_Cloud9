function solution(score) {
    var answer = new Array(score.length);
    let sumScore = [];
    score.forEach(a => { // O(n)
        sumScore.push(a[0] + a[1]);
    })

    for (let j = 0; j < sumScore.length; j++) { //O(n^2)
        if (sumScore[j] == maxValue) {
            answer[j] = rank;
            repeat++;
            sumScore[j] = -1;
        }
        console.log(repeat)
    }
    rank = rank + repeat;




return answer;
}

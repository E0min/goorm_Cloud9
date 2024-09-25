const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function (line) {
    const N = parseInt(line.trim());

    // 메시 수열의 길이를 계산하는 함수
    function messiLength(n, memo = {1: 5, 2: 13}) {
        if (n in memo) return memo[n];
        memo[n] = messiLength(n - 1, memo) + 1 + messiLength(n - 2, memo);
        return memo[n];
    }

    // 메시 수열에서 N번째 문자를 찾는 함수
    function findMessiCharacter(n, idx, memo = {1: 'Messi', 2: 'Messi Gimossi'}) {
        if (n === 1) return 'Messi'[idx - 1];
        if (n === 2) return 'Messi Gimossi'[idx - 1];

        let lenNMinus1 = messiLength(n - 1);
        if (idx <= lenNMinus1) {
            return findMessiCharacter(n - 1, idx, memo);
        } else if (idx === lenNMinus1 + 1) {
            return ' ';
        } else {
            return findMessiCharacter(n - 2, idx - lenNMinus1 - 1, memo);
        }
    }

    let n = 1;
    while (messiLength(n) < N) n++;

    let result = findMessiCharacter(n, N);

    if (result === ' ') {
        console.log('Messi Messi Gimossi');
    } else {
        console.log(result);
    }

    rl.close();
});
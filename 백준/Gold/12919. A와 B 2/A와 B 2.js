const readline = require('readline');

// readline 인터페이스를 만듭니다.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 입력을 받습니다.
let input = [];
rl.on('line', function (line) {
    input.push(line);
}).on('close', function () {

    const S = input[0];
    const T = input[1];

    // 재귀적으로 T에서 S로 변환 가능한지 확인하는 함수
    function TtoS(t) {
        if (t === S) { // T가 S와 같아지면 성공
            return true;
        }
        if (t.length < S.length) { // T가 S보다 짧아지면 실패
            return false;
        }
        
        // T의 마지막 문자가 'A'이면 'A'를 제거하고 재귀 호출
        if (t[t.length - 1] === 'A') {
            if (TtoS(t.slice(0, -1))) {
                return true;
            }
        }

        // T의 첫 문자가 'B'이면 문자열을 뒤집고 'B'를 제거한 후 재귀 호출
        if (t[0] === 'B') {
            let reversed = t.split("").reverse().join("").slice(0, -1);
            if (TtoS(reversed)) {
                return true;
            }
        }

        return false;
    }

    console.log(TtoS(T) ? 1 : 0);

    rl.close();

});
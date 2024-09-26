//백준 실버2

const readline = require('readline');

// readline 인터페이스를 만듭니다.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 질문을 던지고 답변을 받습니다.
let input = [];
rl.on('line', function (line) {
    input.push(line);
}).on('close', function () {

    const S = input[0];
    const T = input[1];

    function A(str){        
        return str.slice(0,-1);
    }

    function B(str){
        return str.split("").reverse().slice(0,-1).join("");
    }

    function TtoS(s,t){ //t->s로 만들 수 있는 지 확인하는 함수
        if(s.length>t.length){ //재귀가 종료되는 기저 조건
            return false;
        }else if (s===t){ //재귀가 종료되는 기저 조건
            return true;
        }else{
            let resultA;
            let resultB
            if(t.startsWith('B')){ //시작문자가 B라면
                resultB = TtoS(s,B(t));
                
            }
            if(t.endsWith('A')){ //마지막 문자가 A라면
                resultA = TtoS(s,A(t));
            }
            if(resultA||resultB){
                return true;
            }
            return false;
        }

    }
    console.log(TtoS(S,T)?1:0);    
    

    rl.close();

});
/*
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
*/
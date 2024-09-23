//
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

    const N = parseInt(input[0]);

    function star(n){
        if(n==1){
            console.log('*');
        }else{
            for(let i = 0 ; i < n/3 ; i++){
                star(n/3);
            }
            for(let i = 0 ; i < n/3 ; i++){
                star(n/3)ㅂ
            }
            for(let i = 0 ; i < n/3 ; i++){
                star(n/3);
            }
        }


    }
  
    star(N);

    rl.close();

});
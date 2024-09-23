//https://www.acmicpc.net/problem/11729
//백준
const readline = require('readline');

// readline 인터페이스를 만듭니다.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 질문을 던지고 답변을 받습니다.
let input=[];
rl.on('line', function (line) {
    input.push(line);
}).on('close', function () {
    
    let N = parseInt(input[0]);
    let H =[];

    function Hanoi (plate,start,end){

        if(plate==1){
            H.push(start+" "+end);
            return 
        }else{
            Hanoi(plate-1,start, 6 - start - end );
            H.push(start+" "+end);
            Hanoi(plate-1 ,6 - start - end , end );
        }
    }

    Hanoi(N,1,3);
    
    let output = `${H.length}\n` + H.join('\n');
    console.log(output);
    process.exit();
});
/*
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
rl.on('line', function(line) {
    input.push(line);
}).on('close', function() {
    let N = parseInt(input[0]);
    let moves = [];
    
    function Hanoi(plate, start, end){
        if(plate === 1){
            moves.push(`${start} ${end}`);
            return;
        }
        // 보조 막대를 계산 (start, end, 보조 막대)
        let temp = 6 - start - end;
        Hanoi(plate - 1, start, temp);
        moves.push(`${start} ${end}`);
        Hanoi(plate - 1, temp, end);
    }

    Hanoi(N, 1, 3);
    
    // 이동 횟수와 이동 순서를 한 번에 출력
    let output = `${moves.length}\n` + moves.join('\n');
    console.log(output);
    process.exit();
});
*/
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
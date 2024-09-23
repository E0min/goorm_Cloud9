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
    const paper = input.slice(1).map(line => line.split(' ').map(Number));

    let paperNumber = [0,0,0];

    function isSameNumber(currentN,startRow,startCol){
        let num = paper[startRow][startCol];
        for(let i = startCol ; i<startCol+currentN ; i++){
            for(let j = startRow ; j<startRow+currentN ;j++){
                if(num != paper[j][i]){
                    return false;
                }
            }
        }
        return true;
    }
    function paperCut(currentN,startRow,startCol){

        if(isSameNumber(currentN,startRow,startCol)){
            let num = paper[startRow][startCol];
            paperNumber[num+1]++;
            return
        }else{ // 9등분해서 재귀 실행
            for(let i=0;i<3;i++){
                for(let j=0;j<3;j++){
                    paperCut(currentN/3,startRow+i*currentN/3,startCol+j*currentN/3);
                }
            }
        }
        
    }

    paperCut(N,0,0)

    console.log(paperNumber[0]);
    console.log(paperNumber[1]);
    console.log(paperNumber[2]);

    
    rl.close();

});
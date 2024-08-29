const readline = require('readline');

// readline 인터페이스를 만듭니다.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 질문을 던지고 답변을 받습니다.
rl.question('입력 (예: 3 1) ', (answer) => {
    var [num,select] = answer.split(" ").map(a=>Number(a));
    var arr = new Array(num);
    for(var i=0;i<num;i++){
        arr[i]=i+1;
    }

    // 입력 후 인터페이스를 닫습니다.
    rl.close();
});

function H(){
    return
}
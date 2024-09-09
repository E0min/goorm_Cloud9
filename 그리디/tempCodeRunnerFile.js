//백준 골드5
// https://www.acmicpc.net/problem/2170
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
    
    
    let lectures = input.slice(1).map(line => line.split(" ").map(Number));
    let candidates = [...lectures.sort((a,b)=>{a[0]-b[0]||a[1]-b[1]})];
    let lectureRooms=1;

    while(candidates.length !== 0){ //후보집합이 공집합이 아닐때 반복
        let endTime=candidates[0][1]; //첫 요소는 무조건 강의실에 배치
        let delIndex=[]; // 배치가 되어 삭제할 강의의 인덱스
        for(let i = 0;i<candidates.length;i++){//한 강의실에 연속 배치 가능한 강의들을 배치
            if(candidates[i][0]>=endTime){  //연속 배치할 수 있는 강의의 index
                endTime = candidates[i][1]; //연속 배치 가능한 강의의 종료시간으로 초기화
                delIndex.push(i); //연속배치할 수 있는 강의는 한 강의실에 넣을 수 있으므로 삭제할 강의의 인덱스에 추가
            }
        }

        if(delIndex.length==0){
            candidates.splice(1,0);
        }else{
            for(let index=0;index<delIndex.length;index++){
                candidates.splice(1,index);
            }
        }
    }

    console.log(lectures);
    rl.close();

});

//백준 실버1
// https://www.acmicpc.net/problem/1931

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
    
    
    let meetingRooms = input.slice(1).map(line => line.split(" ").map(Number));


    meetingRooms.sort((a,b)=>a[1]-b[1]||a[0]-b[0]);
    let endTime=meetingRooms[0][1];
    let startTime=meetingRooms[0][0];
    let n = meetingRooms.length;
    let count = 1; 
    
    for(let i = 1 ; i < n ; i++){
        //추가: 현재 마지막 회의의 종료시간보다 다음 회의의 시작시간이 클때 && 
        if(meetingRooms[i][0]>=endTime){ //
            endTime = meetingRooms[i][1]; // 마지막 회의의 종료시간 
            count++;
    }
}
   
    console.log(count);
    rl.close();

});

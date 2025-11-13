const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

//곡개수, 시작 볼륨, 맥스볼륨
//const [N, S, M] = input[0].split(" "); 일때 잘못 나온 이유 확인해보기

const [N, S, M] = input[0].split(" ").map(Number);
const v = input[1].split(" ").map(Number);
const volume = Array.from({ length: N + 1 }, () => Array(M + 1).fill(0));
let answer = -1

//바텀업 방식으로 모든 경우를 기록한다.
//
volume[0][S] = 1;

for (let i = 1; i <= N; i++) {

    for (let j = 0; j <= M; j++) {
        //더하는 로직
        if(volume[i-1][j]==1){
            if(j+v[i-1]<=M && j+v[i-1]>=0 ){
                volume[i][j+v[i-1]] = 1
            }
            if(j-v[i-1]<=M && j-v[i-1]>=0 ){
                volume[i][j-v[i-1]] = 1
            }
        }
    }
}

//volume[N][]에 대해 거꾸로 탐색하기
for(let i = M ; i>=0 ; i--){
    if(volume[N][i]==1){
        answer = Math.max(answer,i)
    }
}
console.log(answer)




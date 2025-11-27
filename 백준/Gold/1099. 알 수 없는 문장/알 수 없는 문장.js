const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

// 1. 입력 파싱 수정
const sentence = input[0]; //문장
const N = Number(input[1]); //단어의 수
const words = [];
for (let i = 0; i < N; i++) {
    words.push(input[i + 2])
}

//dp[i] -> i번째 글자까지 채울 때 드는 최소비용
const dp = new Array(sentence.length+1).fill(Infinity)
//초기값 설정
dp[0]=0

for (let i = 0; i < sentence.length; i++) {

    for (let j = 0; j < N; j++) { //모든 단어 순회

        //범위를 벗어나면 아웃
        if(words[j].length+i>sentence.length){
            continue
        }

        //순서만 다른 문자열인경우 카운트 계산
        if(words[j].split("").sort().join() == sentence.slice(i,i+words[j].length).split("").sort().join()){
            let word = words[j];
            let count=0;

            //카운트 증가
            for(let k = 0; k<word.length;k++){
                if(sentence[i+k] != word[k]){ 
                count++
                };
            }
            dp[i+word.length] = Math.min(dp[i+word.length],dp[i]+count);
        }

    }
}
const result = dp[sentence.length];
console.log(result === Infinity ? -1 : result);
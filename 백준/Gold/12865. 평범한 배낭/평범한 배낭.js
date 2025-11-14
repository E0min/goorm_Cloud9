const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

//N: 물품 수 , K: 가능한 최대 무게
const weights = [];
const values =[];

const [N,K] = input[0].split(" ").map(Number);

for(let i = 1 ; i<N+1;i++){
    const [weigth,value] = input[i].split(" ").map(Number);
    weights.push(weigth);
    values.push(value);
}

const dp = Array(K+1).fill(0);

for(let i = 0 ; i<N;i++){
    const w = weights[i];
    const v = values[i];
    for(let j = K;j>=w;j--){
        dp[j] = Math.max(dp[j],dp[j-w]+v);
    }
}
console.log(dp[K])
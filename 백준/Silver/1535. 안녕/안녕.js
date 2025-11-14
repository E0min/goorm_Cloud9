const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

//곡개수, 시작 볼륨, 맥스볼륨
//const [N, S, M] = input[0].split(" "); 일때 잘못 나온 이유 확인해보기

const N = Number(input[0]);
const costs = input[1].split(" ").map(Number);
const gains = input[2].split(" ").map(Number);

//최대 체력은 100이므로
// hp[소모하는 체력] = 그 체력에서 얻을 수 있는 최대 이득 
const hp = Array(100).fill(0);

for (let i = 0; i < N; i++) {
    for (let j = 99; j >= costs[i]; j--) {
            hp[j] = Math.max(hp[j], hp[j - costs[i]] + gains[i])

    }
}
// 

console.log(hp[99])


//j는 남은 hp
// for (let j = 100; j >= 1; j--) {
//     let maxWeight = 0
//     //i번째 사람
//     for (let i = 0; i < N; i++) {
//         if (j - costs[i] > 0) {
//             maxWeight = Math.max(hp[j], hp[j - costs[i]] + gains[i])
//         }
//     }
//     hp[j-1] = maxWeight
// }
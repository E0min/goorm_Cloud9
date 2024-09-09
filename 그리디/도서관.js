//백준 골드4
//https://www.acmicpc.net/problem/1461

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
    
    let negative = [];
    let positive = [];

    const [N, K] = input[0].split(' ').map(Number);
    const booksLocation = input[1].split(' ').map(Number);

    for (let location of booksLocation) {
        if (location < 0) {
            negative.push(Math.abs(location));  // 음수는 양수로 변환해서 처리
        } else {
            positive.push(location);
        }
    }

    // 음수와 양수를 각각 내림차순으로 정렬 
    negative.sort((a, b) => b - a);
    positive.sort((a, b) => b - a);

    // 최종 이동 거리
    let totalDistance = 0;
    let farthestDistance = 0;
    // 가장 먼 거리 (돌아올 필요 없는 마지막 이동 거리를 처리하기 위해)
    if (negative.length > 0) farthestDistance = Math.max(farthestDistance, negative[0]);
    if (positive.length > 0) farthestDistance = Math.max(farthestDistance, positive[0]);

    //K:2 책이 5개 있을 때 0 1 / 2 3 / 4의 각각 최댓값구하면 됌
    for(let i = 0 ; i<Math.ceil(negative.length/K);i++){
        totalDistance += Math.max(...negative.slice(i*K,(i + 1) * K)) * 2;  // 왕복 거리
    }
    for(let i = 0 ; i<Math.ceil(positive.length/K);i++){
        totalDistance += Math.max(...positive.slice(i*K,(i + 1) * K)) * 2;  // 왕복 거리
    }
    totalDistance = totalDistance - farthestDistance;
    console.log(totalDistance);
    rl.close();

});

// const readline = require('readline');

// // readline 인터페이스 생성
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// let input = [];

// rl.on('line', function (line) {
//     input.push(line);
// }).on('close', function () {
    
//     let negative = [];
//     let positive = [];

//     const [N, K] = input[0].split(' ').map(Number);
//     const booksLocation = input[1].split(' ').map(Number);

//     // 음수와 양수로 분리
//     for (let location of booksLocation) {
//         if (location < 0) {
//             negative.push(Math.abs(location));  // 음수는 양수로 변환해서 처리
//         } else {
//             positive.push(location);
//         }
//     }

//     // 음수와 양수를 각각 내림차순으로 정렬 
//     negative.sort((a, b) => b - a);
//     positive.sort((a, b) => b - a);

//     // 최종 이동 거리
//     let totalDistance = 0;

//     // 가장 먼 거리 찾기 (음수와 양수가 있을 때만 처리)
//     let farthestDistance = 0;
//     if (negative.length > 0) farthestDistance = Math.max(farthestDistance, negative[0]);
//     if (positive.length > 0) farthestDistance = Math.max(farthestDistance, positive[0]);

//     // 음수 그룹 처리 (K권씩 묶어서 왕복 거리 계산)
//     for (let i = 0; i < negative.length; i += K) {
//         totalDistance += negative[i] * 2;  // 왕복 거리
//     }

//     // 양수 그룹 처리 (K권씩 묶어서 왕복 거리 계산)
//     for (let i = 0; i < positive.length; i += K) {
//         totalDistance += positive[i] * 2;  // 왕복 거리
//     }

//     // 가장 먼 거리 한 번만 이동
//     totalDistance -= farthestDistance;

//     // 결과 출력
//     console.log(totalDistance);
//     rl.close();
// });
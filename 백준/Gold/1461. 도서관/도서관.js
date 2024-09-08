const readline = require('readline');

// readline 인터페이스 생성
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input.push(line);
}).on('close', function () {
    // 입력 처리
    const [N, K] = input[0].split(' ').map(Number);
    const booksLocation = input[1].split(' ').map(Number);

    // 음수와 양수로 나누기
    let negative = [];
    let positive = [];

    for (let location of booksLocation) {
        if (location < 0) {
            negative.push(Math.abs(location));  // 음수는 양수로 변환해서 처리
        } else {
            positive.push(location);
        }
    }

    // 음수와 양수를 각각 내림차순으로 정렬 (가장 먼 곳부터 처리하기 위해)
    negative.sort((a, b) => b - a);
    positive.sort((a, b) => b - a);

    // 최종 이동 거리
    let totalDistance = 0;

    // 음수 그룹 처리 (왼쪽)
    for (let i = 0; i < Math.ceil(negative.length / K); i++) {
        // K개의 그룹에서 최대값을 구해서 이동 거리 더하기
        const group = negative.slice(i * K, (i + 1) * K);
        if (group.length > 0) {
            totalDistance += Math.max(...group) * 2;  // 왕복 거리
        }
    }

    // 양수 그룹 처리 (오른쪽)
    for (let i = 0; i < Math.ceil(positive.length / K); i++) {
        // K개의 그룹에서 최대값을 구해서 이동 거리 더하기
        const group = positive.slice(i * K, (i + 1) * K);
        if (group.length > 0) {
            totalDistance += Math.max(...group) * 2;  // 왕복 거리
        }
    }

    // 가장 먼 거리 한 번만 이동
    const farthestNegative = negative.length > 0 ? negative[0] : 0;
    const farthestPositive = positive.length > 0 ? positive[0] : 0;
    const farthestDistance = Math.max(farthestNegative, farthestPositive);

    // 돌아올 필요 없는 거리 빼주기
    totalDistance -= farthestDistance;

    // 결과 출력
    console.log(totalDistance);
});

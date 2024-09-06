//프로그래머스 lv.1
//https://school.programmers.co.kr/learn/courses/30/lessons/42860#

// function solution(name) {
//     let answer = 0;
//     const n = name.length;
    
//     // 문자열을 아스키 코드로 변환
//     let nameArray = [...name].map(a => a.charCodeAt());
    
//     // 현재 커서 위치
//     let currentIndex = 0;

//     // 모든 문자를 'A'로 만들 때까지 반복
//     while (true) {
//         // 현재 위치에서 문자를 'A'로 바꾸기 위한 상하 이동 횟수 계산
//         if (nameArray[currentIndex] > 78) {  // N보다 크면 아래로 이동이 더 빠름
//             answer += 91 - nameArray[currentIndex];  // 'Z'에서 이동
//         } else {
//             answer += nameArray[currentIndex] - 65;  // 'A'에서 이동
//         }

//         // 현재 문자는 'A'로 변경했다고 간주
//         nameArray[currentIndex] = 65;

//         // 모든 문자가 'A'로 변경되었는지 확인 (종료 조건)
//         if (nameArray.every(a => a === 65)) {
//             break;
//         }

//         // 우측으로 순회하여 A가 아닌 문자까지의 거리 계산
//         let rightDistance = 0;
//         let checkRightIndex = currentIndex;
//         while (nameArray[(checkRightIndex + 1) % n] === 65) {
//             checkRightIndex = (checkRightIndex + 1) % n;
//             rightDistance++;
//         }

//         // 좌측으로 순회하여 A가 아닌 문자까지의 거리 계산
//         let leftDistance = 0;
//         let checkLeftIndex = currentIndex;
//         while (nameArray[(checkLeftIndex - 1 + n) % n] === 65) {
//             checkLeftIndex = (checkLeftIndex - 1 + n) % n;
//             leftDistance++;
//         }

//         // 가장 가까운 방향으로 이동
//         if (rightDistance <= leftDistance) {
//             currentIndex = (currentIndex + rightDistance + 1) % n;
//             answer += rightDistance + 1;  // 이동한 거리만큼 더함
//         } else {
//             currentIndex = (currentIndex - leftDistance - 1 + n) % n;
//             answer += leftDistance + 1;  // 이동한 거리만큼 더함
//         }
//     }

//     return answer;
// }
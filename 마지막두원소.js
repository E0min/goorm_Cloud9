//문제 설명
//정수 리스트 num_list가 주어질 때, 마지막 원소가 그전 원소보다 크면 마지막 원소에서 그전 원소를 뺀 값을 마지막 원소가 
//그전 원소보다 크지 않다면 마지막 원소를 두 배한 값을 추가하여 return하도록 solution 함수를 완성해주세요.

// link: https://school.programmers.co.kr/learn/courses/30/lessons/181927 

function solution(num_list) {
    var answer = [];
    const lastNum = num_list.length-1 ;
    
    num_list[lastNum] > num_list[lastNum-1] ? answer.push(Number(num_list[lastNum])-Number(num_list[lastNum-1])) : answer.push(Number(num_list[lastNum]*2))
    
    return num_list.concat(answer);
}
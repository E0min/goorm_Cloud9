//https://school.programmers.co.kr/learn/courses/30/lessons/42883
function solution(number, k) {
    const stack = [];
   
    for(let num of number){
        
        while(k>0 && stack[stack.length-1]<num){
            stack.pop();
            k--;
        }
        stack.push(num);
    }
    if(k>0){
        stack.splice(stack.length-k,k)
    }
    return stack.join("");
}


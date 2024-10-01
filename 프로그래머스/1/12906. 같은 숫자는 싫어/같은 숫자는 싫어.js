function solution(arr)
{
    var answer = [];
    let flag =null;
    for(let i = 0 ;i<arr.length;i++){
        if(arr[i]!=flag){
            answer.push(arr[i]);
            flag = arr[i];
        }
    }
    
    
    return answer;
}
function solution(array, commands) {
    let ans = [];
    for(let i=0; i<commands.length; i++){
        let start = commands[i][0]-1;
        let end = commands[i][1];
        let slice = commands[i][2]-1;
        
        let arr = array.slice(start, end).sort((a,b) => a - b);
        ans.push(arr[slice]);
    }
    return ans;
}

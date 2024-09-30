function solution(nums) {
    var answer = 0;
    
    var pocket = new Map();
    
    nums.forEach((mon) => {
        if(pocket.get(mon))
            pocket.set(mon, pocket.get(mon)+1);
        else
            pocket.set(mon, 1);
    });
    
    if(pocket.size < nums.length / 2)
        answer = pocket.size;
    else
        answer = nums.length / 2;
    
    return answer;
}
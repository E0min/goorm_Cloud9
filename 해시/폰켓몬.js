function solution(nums) {
    var answer = 0;
    let halfOfN = nums.length/2;
    let numsSet = new Set(nums);
    
    if(numsSet.size>halfOfN){
        answer = halfOfN;
    }else{
        answer = numsSet.size;
    }
    
    return answer;
}
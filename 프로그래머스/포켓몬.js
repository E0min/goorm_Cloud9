function solution(nums) {
    let newArr = [];
    let count = nums.length/2;
    for(let i=0 ; i < nums.length ; i++){
        if(!newArr.includes(nums[i])){
            newArr.push(nums[i]);
        }
    }
    return Math.min(newArr.length, count);
}

function solution(nums) {
    const group = new Set (nums)
    const max = nums.length/2 
    return Math.min(group.size, max);
}


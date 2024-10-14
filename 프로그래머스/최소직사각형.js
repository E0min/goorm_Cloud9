function solution(sizes) {
    let h = [];
    let w = [];
    for(let i=0; i<sizes.length ; i++){
        let arr = sizes[i].sort((a,b) => b-a);
        h.push(arr[0]);
        w.push(arr[1]);
    }
    let ans = Math.max(...h) * Math.max(...w);
    return ans;
}

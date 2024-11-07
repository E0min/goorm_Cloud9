function solution(sizes) {
    let maxW = 0;
    let maxH = 0;
    
    sizes.forEach(([w, h]) => {
        if(w < h) [w, h] = [h, w];
        maxW = Math.max(maxW, w);
        maxH = Math.max(maxH, h);
    })
    
    return maxW * maxH;
}

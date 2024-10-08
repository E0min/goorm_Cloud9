//https://school.programmers.co.kr/learn/courses/30/lessons/86491?language=javascript
function solution(sizes) {
    var answer = 0;
    let w=0;
    let h=0;
    sizes.forEach(([x,y])=>{
        w=Math.max(Math.max(x,y),w);
        h=Math.max(Math.min(x,y),h);
    })
    return w*h;
}
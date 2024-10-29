//https://school.programmers.co.kr/learn/courses/30/lessons/42860#
function solution(name) {
    var answer = 0;
    let length =name.length;
    name.split("").forEach((str)=>{
        answer+=upDownCount(str);
        console.log(upDownCount(str))
    })
    
    let move = length -1;
    
    for(let i = 0; i<length ; i++){
        let nextNode = i+1;
        while(name[nextNode] == 'A'&&nextNode<length){ //A 구간의 길이를 구하는 법
            nextNode++;
        }
        move = Math.min(move,i+length-nextNode+Math.min(i,length-nextNode))
    }
    console.log(move)
    return answer + move;
}

const upDownCount = (str) => {
    return Math.min(str.charCodeAt()-'A'.charCodeAt(),'Z'.charCodeAt() -str.charCodeAt()+1 )
}
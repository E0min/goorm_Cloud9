const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const [A, B] = input[0].split(" ").map(Number)

const queue =[[A,1]]

while(queue.length>0){
    let [temp,count] = queue.shift();

    if(temp===B){
        console.log(count)
        return
    }
    if(temp>B) continue
    for(const next of [temp*2,temp*10+1]){
            queue.push([next,count+1]);
    }
}
console.log(-1)
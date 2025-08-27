const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const [N, K] = input[0].split(" ").map(Number)
const visited = new Array(100001).fill(false)
visited[N] = true

const queue = [[N, 0]]

while (queue.length > 0) {
    let [temp, count] = queue.shift()

    if (temp == K) {
        console.log(count)
        return
    }

    for (const next of [temp - 1, temp + 1, temp * 2]) {
        if (!visited[next] && next >= 0 && next <= 100000) {
            queue.push([next, count + 1])
            visited[next] = true
        }
    }
}
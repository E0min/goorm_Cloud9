const readline = require('readline');

// readline 인터페이스 생성
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 입력을 저장할 배열
let input = [];
rl.on('line', function (line) {
    input.push(line);
}).on('close', function () {

    const N = parseInt(input[0]);  // 첫 번째 입력에서 가로 길이 N을 가져옴

    // 2차원 배열을 0부터 시작하는 인덱스로 저장
    let region = Array.from({ length: N }, (_, i) => input[i + 1].split(" ").map(Number)); // 이거 공부하자.
    const maxHeight = Math.max(...region.flat()); // 지역의 최대 높이 계산** 기억
    //
    let direction = [[-1,0],[1,0],[0,1],[0,-1]];
    let max = 0;
    for(let i = 0 ; i<maxHeight;i++){ //i는 강수량
        let regionWater = region.map(a=>a.map(b=>b<=i?0:1));
        //let visited = region.map(a=>a.map(b=>b=false));
        let visited = Array.from({length:N},()=>Array(N).fill(false));
        let count = 0;
        //시작 위치 찾기
        for(let x = 0 ; x<N;x++){
            for(let y=0 ; y<N ; y++){
                if(regionWater[y][x]>0&&!visited[y][x]){//육지이고 방문한 적이 없는 경우
                    let stack = [[x,y]];
                    count++;
                    while(stack.length>0){
                        let [popX,popY] = stack.pop();
                        visited[popY][popX] = true;
                        direction.forEach(a=>{
                            let newX = popX+a[1];
                            let newY = popY+a[0];
                            if(newX>=0&&newY>=0&&newX<N&&newY<N&&!visited[newY][newX]&&regionWater[newY][newX]==1){// 탐색하는 녀석들이 방문한적없고 침수되지 않았다면 
                                stack.push([newX,newY]); // 스택에 넣는다.
                            }
                        })

                    }
                }
            }
        }
        max = Math.max(max,count);
    }
    console.log(max);

    rl.close();
});
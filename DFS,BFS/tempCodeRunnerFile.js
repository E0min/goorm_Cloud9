  // let visited = Array.from({ length: N }, () => Array(M).fill(false)); // 
            // const tomato = input.slice(1).map(line => line.split(" ").map(Number)); // 토마토 상자 상태 입력
            // let days = Array.from({ length: N }, () => Array(M).fill(0));

            // let queue = [];
            // let totalDay = 0;
            // if (!visited[y][x] && tomato[y][x] == 1) { // 토마토가 익어있고 방문하지 않은 점에서 시작
            //     queue.push([x, y]);
            //     while (queue.length > 0) { // 한 지점부터 BFS 시작
            //         let [x, y] = queue.shift();
            //         visited[y][x] = true;
            //         days[y][x] = 1;
            //         direction.forEach(a => {
            //             let newX = x + a[0];
            //             let newY = y + a[1];
            //             if (newX >= 0 && newY >= 0 && newX < M && newY < N && !visited[newY][newX] && tomato[newY][newX] == 0) {
            //                 queue.push([newX, newY]);
            //                 days[newY][newX] = days[y][x] + 1;
            //                 totalDay = Math.max(totalDay, days[newY][newX]);
            //             }
            //         })
            //     } // 한 토마토에 대하 BFS 끝.
            // }
            // //전부 익었는지 체크; 전부 익었을 때만 totalDay를 min에 저장하고 최소 일자를 구한다.
            // for (let i = 0; i < N; i++) {
            //     for (let j = 0; j < M; j++) {
            //         if (tomato[i][j]==0){
            //             console.log(-1);
            //             return // 전부 익지 않았다면 다음 토마토 지점으로 넘어감
            //         }else{
            //             min = Math.min(min,totalDay);
            //         }
            //     }
            // }
function solution(board) {
    var answer = 0;
    var bomb = []
    var n = board.length;
    for(var j = 0; j<n;j++){
        for(var i = 0; i<n;i++){
            if(board[i][j]==1){ // 지뢰가 매설된 인덱스 값을 저장함
                bomb.push([i,j]);
            }
        }
    }
    bomb.forEach(ij=>{
        for(var i = -1 ;i<=1;i++){
            for(var j = -1 ;j<=1;j++){
                if(ij[0]+i>=0 && ij[0]+i<n && ij[1] +j >=0 && ij[1]+j<n){
                    board[ij[0]+i][ij[1]+j] = 1;
                }
            }
        }
    })
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 0) {
                answer++;
            }
        }
    }
    return answer;
}
function solution(routes) {
    var answer = 1;
    //정렬
    routes.sort((a,b)=>a[0]-b[0]);
    
    let leftflag=routes[0][0];
    let rightflag=routes[0][1];

    for(let i=0 ; i < routes.length ; i++){
                console.log(i+1 +" "+leftflag+" "+rightflag)

        if(rightflag>=routes[i][0]){
            leftflag = routes[i][0];
            if(rightflag>=routes[i][1]){
                rightflag = routes[i][1];
            }
        }else{
            leftflag = routes[i][0];
            rightflag = routes[i][1];
            answer++;
        }
    }
    
    
    return answer;
}
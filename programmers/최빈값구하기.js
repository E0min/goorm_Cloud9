function solution(array) {
    var cnt = new Array(1000);
    cnt.fill(0);
    
    for(var i = 0; i < array.length; i++){
        cnt[array[i]]++;
    }
    
    var answer;
    var max = Math.max(...cnt);
    var count = 0;
    for(var i = 0; i < cnt.length; i++){
        if(max === cnt[i]){
            answer = i;
            count++;
        }
    }
    if(count >= 2){
        answer = -1;
    }
    
    return answer;
}
function solution(n) {
    var i = 1;
    while(true){
        if(i % n == 0 && i % 6 == 0)
            break;
        i++;
    }
    return i / 6;
}
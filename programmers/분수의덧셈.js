function solution(numer1, denom1, numer2, denom2) {
    var numer = numer1*denom2 + numer2*denom1;
    var denom = denom1*denom2;
    var gcd = 1;
    for(var i =2; i <= Math.min(numer, denom); i++){
        if(numer % i == 0 && denom % i == 0){
            gcd = i;
        }
    }
    var answer = [numer/gcd, denom/gcd];
    return answer;
}
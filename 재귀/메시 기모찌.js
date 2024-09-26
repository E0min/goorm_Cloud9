//https://www.acmicpc.net/problem/17297
//백준 실버2

const readline = require('readline');

// readline 인터페이스를 만듭니다.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 질문을 던지고 답변을 받습니다.
let input = [];
rl.on('line', function (line) {
    input.push(line);
}).on('close', function () {

    const N = parseInt(input[0]);

    // 재귀함수로 하는 방식은 재귀 호출이 너무 많아지면 에러가 발생한다.
    // 입력값 N에서 계속 빼가는 방식을 사용한다.
    function messiLength(n, memo = {1: 5, 2: 13}) {
        if (n in memo) return memo[n];
        memo[n] = messiLength(n - 1, memo) + 1 + messiLength(n - 2, memo);
        return memo[n];
    }

    let n = 1; // N번째 문자열을 구하기 위해서 필요한 최소 messi재귀의 수: n
    let memoObj =[];
    let a = messiLength(n);
    memoObj.push(a);
    while(a<N){
        n++;
        a = messiLength(n);
        memoObj.push(a);
    }

    n = memoObj.length;
    // 재귀로 전부 호출해서 계산하면 에러
    //규칙성을 발견 n번째 재귀를 한 문자열의 idx값 = 
    function findMessiChar(index, n){
        if(n==1){
            let str = "Messi";
            return str[index-1];
        }else if(n==2){
            let str = "Messi Gimossi";
            return str[index-1];
        }else if(index > memoObj[n-2]){
            index = index - memoObj[n-2] - 1; //1은 공백을 빼주는 것이다.
            if(index==0){
                return ' ';
            }
        }
        return findMessiChar(index,n-1);

    }
   
    let result = findMessiChar(N,n);

    if(result ===' '){
        console.log("Messi Messi Gimossi");
    }else{
        console.log(result);
    }
   
    rl.close();
});

// //https://www.acmicpc.net/problem/17297
// //백준 실버2

// const readline = require('readline');

// // readline 인터페이스를 만듭니다.
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// // 질문을 던지고 답변을 받습니다.
// let input = [];
// rl.on('line', function (line) {
//     input.push(line);
// }).on('close', function () {

//     const N = parseInt(input[0]);

//     // 재귀함수로 하는 방식은 재귀 호출이 너무 많아지면 에러가 발생한다.
//     // 입력값 N에서 계속 빼가는 방식을 사용한다.
//     function messiLength(n, memo = {1: 5, 2: 13}) {
//         if (n in memo) return memo[n];
//         memo[n] = messiLength(n - 1, memo) + 1 + messiLength(n - 2, memo);
//         return memo[n];
//     }

//     let n = 1; // N번째 문자열을 구하기 위해서 필요한 최소 messi재귀의 수
//     while(messiLength(n)<N){
//         n++;
//     }
//     console.log(n);

//     //재귀로 전부 호출해서 계산하면 에러
//     let str = 'Messi Gimossi Messi'
//     function findMessiChar(n,index){ //index에는 처음에 N이 들어간다.
//         if(index<=19){
//             if(index==0||str[index-1]==' '){
//                 return 'Messi Messi Gimossi';
//             }else{
//                 return str[index-1];
//             }
//         }else{
//             index = index - (messiLength(n-1)+1);
//             console.log(index);
//             return findMessiChar(n-1,index);
//         }
//     }
//     console.log(findMessiChar(n,N));
//     rl.close();
// });
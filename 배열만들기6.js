/*
문제 설명
0과 1로만 이루어진 정수 배열 arr가 주어집니다. arr를 이용해 새로운 배열 stk을 만드려고 합니다.

i의 초기값을 0으로 설정하고 i가 arr의 길이보다 작으면 다음을 반복합니다.

만약 stk이 빈 배열이라면 arr[i]를 stk에 추가하고 i에 1을 더합니다.
stk에 원소가 있고, stk의 마지막 원소가 arr[i]와 같으면 stk의 마지막 원소를 stk에서 제거하고 i에 1을 더합니다.
stk에 원소가 있는데 stk의 마지막 원소가 arr[i]와 다르면 stk의 맨 마지막에 arr[i]를 추가하고 i에 1을 더합니다.
위 작업을 마친 후 만들어진 stk을 return 하는 solution 함수를 완성해 주세요.

단, 만약 빈 배열을 return 해야한다면 [-1]을 return 합니다.
*/

function solution(arr) {
    var stk = [];
    i= 0 ;
    
    for(i=0;i<arr.length;i++){
        switch(true){
            case arr.length === 0:
            stk.push(arr[i])
            break; 
            case stk[stk.length-1] === arr[i] :
            stk.pop()
            break;
            case stk[stk.length-1] !== arr[i] : 
            stk.push(arr[i])
        }}
        console.log(stk)
        if(stk.length == 0) stk.push(-1); 
        
        return stk 
    }

/*
switch 문을 사용해서 문제를 해결했는데,
다른 사람의 풀이를 보니 역시 else if 문이 가장 많이 보였다.


아래는 for문으로 푼 것 

*/

function solution(arr) {
    var stk = [];
    i= 0 ;
    
    for(i=0;i<arr.length;i++){
        if(arr.length === 0){
            stk.push(arr[i])
        }else if(stk[stk.length-1] === arr[i]){
            stk.pop()
        }else{
            stk.push(arr[i])
        }
    }
        console.log(stk)
        if(stk.length == 0) stk.push(-1); 
        
        return stk 
    }

    // 다른사람의 풀이에서 추상화를 굉장히 잘한 사례를 보았음 
    
    function solution(arr) {
        let stk = []
        arr.forEach((x,i)=>{
            if( x !== stk[stk.length - 1]){
                stk.push(x)  
                // 애초에 arr.length == 0 일때 push하는 부분은
                // 마지막 인덱스와 당연히 같지 않아서 조건이 2개로 줄어든다.
            }else{
                stk.splice(-1)
            }
            //console.log("배열 추가 삭제 진행과정 : ",stk)
        })
    
        if(stk.length == 0){
            stk = [-1]
        }
        return stk;
    }
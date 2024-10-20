function solution(answers) {
    let mathIdiot = new Array(3).fill(0);
    let result =[];
    
    answers.forEach((answer,index)=>{
        if(index%5+1 == answer || (index%5+1)%5+5 == answer){ //  1번수포자 점수 증가.
            mathIdiot[0]++;
        }
        
        if((index%8==0||index%8==2||index%8==4||index%8==6)&&answer==2){
           mathIdiot[1]++;
        }else if(index%8==1&&answer==1){
            mathIdiot[1]++;
        }else if(index%8==3 && answer==3)  {
            mathIdiot[1]++;
        }else if(index%8==5 && answer==4)  {
            mathIdiot[1]++;
        }else if(index%8==7 && answer==5)  {
            mathIdiot[1]++;
        }
        
        if((index%10==0 ||index%10==1)&&answer==3){
            mathIdiot[2]++;
        }else if((index%10==2 ||index%10==3)&&answer==1){
            mathIdiot[2]++;
        }else if((index%10==4 ||index%10==5)&&answer==2){
            mathIdiot[2]++;
        }else if((index%10==6 ||index%10==7)&&answer==4){
            mathIdiot[2]++;
        }else if((index%10==8 ||index%10==9)&&answer==5){
            mathIdiot[2]++;
        }
    })
    let max = Math.max(...mathIdiot);
    mathIdiot.forEach((element,index)=>{
        if(element==max){
            result.push(index+1)
        }
    })
    
    return result;
}
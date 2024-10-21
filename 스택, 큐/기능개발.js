function solution(progresses, speeds) {
    var answer = [];
    let leftDaysBeforeDeploy=[];
    progresses.forEach((state,index)=>{
        let leftdays = Math.ceil((100-state)/speeds[index]);
        leftDaysBeforeDeploy.push(leftdays);
    });
    
    let length = leftDaysBeforeDeploy.length;
    let deploy=[];
    
    for(let i = 0 ; i<length ; i++){
        if(deploy.length==0 || Math.max(...deploy)>leftDaysBeforeDeploy[i] ){
            deploy.push(leftDaysBeforeDeploy[i]);

        }else if(Math.max(...deploy)<leftDaysBeforeDeploy[i]){
            answer.push(deploy.length);
            deploy = [];
            deploy.push(leftDaysBeforeDeploy[i]);
        }else{ // Math.max(...deploy) == leftDaysBeforeDeploy[i]) 인 경우
            deploy.push(leftDaysBeforeDeploy[i]);
        }
        if(i==length-1){
            answer.push(deploy.length);
        }
    }
   
    return answer;
}
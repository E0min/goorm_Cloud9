function solution(numbers) {
    numbers.sort((a,b)=>{ 
        let strA = a.toString();
        let strB = b.toString();
        return parseInt(strB+strA)-parseInt(strA+strB);
    })

    if(parseInt(numbers.join(""))==0){
        return "0";
    }else{
        return numbers.join("");

    }

}

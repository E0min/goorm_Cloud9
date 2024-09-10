function solution(dots) {
  //y2 - y1 / x2 - x1
  
  let [[x1, y1], [x2, y2], [x3, y3], [x4, y4]] = dots;
  
  if((y2 - y1) / (x2 - x1) === (y4 - y3) / (x4 - x3)){
      return 1;
  }else if ((y3 - y1) / (x3 - x1) === (y2 - y4) / (x2 - x4)){
      return 1;
  }else if ((y4 - y1) / (y4 - y1) === (y3 - y2) / (x3 - x2)){
      return 1;
  }
  return 0;
  
}
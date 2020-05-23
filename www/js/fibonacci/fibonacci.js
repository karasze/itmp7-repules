function fibonacci(idx){
    var last = 1, prevlast = 0, temp;
  
    while (idx >= 0){
      temp = last;
      last = last + prevlast;
      prevlast = temp;
      idx--;
    }
    while(prevlast>=10){prevlast=prevlast/10}
    return temp%10-Math.round(prevlast);
  }
  console.log(fibonacci(50));


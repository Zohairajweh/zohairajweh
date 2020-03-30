function oddishOrEvenish(num) {
    var z= [...String(num)].map(Number).reduce((x,y) => x + y) ; 
    //declare variable convert value to string in new array  Getting the sum of ALL numbers passed in! 
  

      if (z%2==0){// condition to check if the value  and return Oddish or Evenish
          return "Evenish";
          }
          else
          return "Oddish";
  }
  
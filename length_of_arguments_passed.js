/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function(...args) {

   var counter = 0 ;
   for (var i of args){
      counter +=1;
   }

   console.log(counter);
   return counter;

};


  argumentsLength(1, 2, 3); // 3

for(var i = 1; i <= 100; i++) {

   if(i % 3 === 0 && i % 5 === 0){     // If number is divisible by 3 and divisible by 5
      console.log('FizzBuzz');
   }
   
   else if(i % 3 === 0){                // Else If number is divisible by 3
      console.log('Fizz');
   }
   
   else if(i % 5 === 0){                // Else If number is divisible by 5
      console.log('Buzz');
   }
   
   else {                               // Else number not divisible by 3 or 5 or 3 and 5
      console.log(i);
   }
}

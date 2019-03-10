// Sum all the prime numbers up to and including the provided number.
function sumPrimes(num) {

    let primes = [];
  
    // Loop through the elements declaring all numbers as prime numbers
    for(let i = 2; i <= num; i++){
         var isPrime = true;
  
          for(let j = 2 ; j <= i; j++){
  
              // Marking non-prime numbers that can be divisible by another number that is not itself
              if(i % j === 0 && i !== j){
                  isPrime = false;
              }
            }
  
      // Only push prime elements into array
      if(isPrime === true){
          primes.push(i);
      }
    }
    // Sum all prime elements
    primes = primes.reduce((a,b) => a + b);
  
    console.log(primes);
    return primes;
  }

sumPrimes(10);
sumPrimes(977);
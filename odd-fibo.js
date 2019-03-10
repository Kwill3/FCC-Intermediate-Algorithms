// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
function sumFibs(num) {

    // Define first 2 numbers of fibonacci sequence
    let a = 0;
    let b = 1;
    let fib = [];

    // Create the sequencer with a do... while loop
    do {
      fib.push(a);
      a = a + b;
      fib.push(b);
      b = a + b;
    }
    while (a <= num)

    // Filter elements larger than num argument and even numbers, then sum all elements with reduce function
    fib = fib.filter(ele => ele <= num).filter(ele => ele % 2 == 1).reduce((a,b) => a + b);
  
    console.log(fib);
    return fib;
  }
  
  sumFibs(1);
  sumFibs(1000);
  sumFibs(4000000);
  sumFibs(4);
  sumFibs(75024);
  sumFibs(75025);
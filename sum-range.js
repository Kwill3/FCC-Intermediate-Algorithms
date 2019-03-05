// Sum all numbers in a range
function sumAll(arr) {

    // Sort numbers from lower to higher
    arr.sort((a,b)=> a-b);
    
    // Start count at smaller number
    let count = arr[0];

    // Get the range between numbers
    let range = arr[1] - arr[0];
    
    // Iterate through the in-between numbers
    for (let i = arr[0]; i < arr[1]; i++){
      count += i + 1;
      console.log(count)
    }
    return count;
}

// Change numbers in array
sumAll([3,7]);
sumAll([1, 4]);
sumAll([4, 1]);
sumAll([5, 10]);
sumAll([10, 5]);
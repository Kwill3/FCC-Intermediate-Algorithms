// Provided an array (first argument),  remove all elements from the array that are in the subsequent arguments. Note: Must use 'arguments' object
function destroyer(arr) {
    // To store unique elements
    let filtered = [];
    // To store subsequent arguments
    let target = [];
  
    // Fill in the subsequent arguments to be targeted at the array
    for (let i = 1; i < arguments.length; i++){
      target.push(arguments[i]);
    }
  
    // Filter target elements from the array
    for (let j = 0; j < arr.length; j++){
      if (target.indexOf(arr[j]) == -1){
        filtered.push(arr[j]);
      }
    
    }
    console.log(filtered);
    // Remove all the values
    return filtered;
  }
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);

  destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3);

  destroyer([3, 5, 1, 2, 2], 2, 3, 5);

  destroyer([2, 3, 2, 3], 2, 3);

  destroyer(["tree", "hamburger", 53], "tree", 53);

  destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan");
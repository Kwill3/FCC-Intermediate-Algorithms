function dropElements(arr, func) {
    let falseEle = 0;
    let array = [];
  
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i]) === false){
      falseEle += 1
    } else {
      break;
    }
  }
  array = arr.slice(falseEle);
  console.log(array)
  return array;
}
  
dropElements([1, 2, 3, 4], function(n) {return n >= 3;});
  
dropElements([0, 1, 0, 1], function(n) {return n === 1;});

dropElements([1, 2, 3], function(n) {return n > 0;});

dropElements([1, 2, 3, 4], function(n) {return n > 5;});

dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;});

dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;});
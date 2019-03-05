// Find the unique elements in 2 arrays (elements that only appear once)
function diffArray(arr1, arr2) {
    var newArr1 = [];
    var newArr2 = [];
    var finalArr =[];
  
    // Find the unique elements in arr 1
    newArr1 = arr1.filter(num => arr2.indexOf(num) == -1);
    
    // Find the unique elements in arr2
    newArr2 = arr2.filter(num => arr1.indexOf(num) == -1);
  
    // Combine the unique elements in one array
    finalArr = [...newArr1, ...newArr2];
    console.log(finalArr);
    return finalArr;

  }
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

  diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]); 

  diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);

  diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]);

  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

  diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);

  diffArray([], ["snuffleupagus", "cookie monster", "elmo"]);

  diffArray([1, "calf", 3, "piglet"], [7, "filly"]);
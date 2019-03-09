/* Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array. */
function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  
  // Store the key value of second argument
  let sourceKey = Object.keys(source)

  function hasKeySetTo(array,key) {

    for (let i = 0; i < array.length; i++){

      // Checks if key exists and if the key value pair matches the second argument key value pair
      if (array[i].hasOwnProperty(key) && array[i][key] == source[key]) {
        // Push object to array
        arr.push(array[i]);
      }
    }
  }
  hasKeySetTo(collection, sourceKey);
  console.log(arr);
   
  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
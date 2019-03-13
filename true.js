// Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
function truthCheck(collection, pre) {
    let truthArr =[];
    
    // Check if predicate is truthy for EACH object
    for (let ele of collection) {
      ele[pre] ? truthArr.push(true) : truthArr.push(false);
    }
    console.log(truthArr);
    
    // Check if ALL predicate is truthy
    return truthArr.every((bool) => bool ? true : false)
  }
  
  truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
  
  truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
  
  truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age");
  
  truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastFoward", "onBoat": null}], "onBoat");
  
  truthCheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastFoward", "onBoat": true}], "onBoat");
  
  truthCheck([{"single": "yes"}], "single");
  
  truthCheck([{"single": ""}, {"single": "double"}], "single");
  
  truthCheck([{"single": "double"}, {"single": undefined}], "single");
  
  truthCheck([{"single": "double"}, {"single": NaN}], "single");
// Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).
function orbitalPeriod(arr) {
    // Standard gravitational parameter for Earth
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
  
    let t;
  
    // Loop through elements in array
    for (let i = 0; i < arr.length; i++){
      let a = arr[i].avgAlt;
      
      // Kepler's Third Law formula
      t = Math.round(2*(Math.PI)*Math.sqrt((Math.pow(a + earthRadius,3))/GM));
      
      // Remove the average altitude key value pair
      delete arr[i]["avgAlt"];
  
      // Add the new orbital period key value pair
      arr[i].orbitalPeriod = t;
      console.log(JSON.stringify(arr));
    }
  
    return arr;
  }
  
  orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
  
  orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]);
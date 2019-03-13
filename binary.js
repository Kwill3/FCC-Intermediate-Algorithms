// Return an English translated sentence of the passed binary string. The binary string will be space separated.
function binaryAgent(str) {
    // Put binary strings into an array
    let arr = str.split(" ");
    let binArr = [];
    let charArr = [];
    let count;

    // This function cycles through binary digits and if the value is 1, adds to it two to the power of a certain degree depending on the digit placement.
    let binary = (bi) => {
      count = 0
      for (let i = 0; i < 8; i++){
        if (bi[i] == 1) {
          count += (Math.pow(2,(7-i)));
        }
      }
      return count;
    }
  
    // Iterates binary function into the array of binaries and pushes return value (decimals) into binArr
    for (let ele of arr){
      binArr.push(binary(ele));
    }
  
    // Iterates decimals to convert into their corresponding ASCII code and pushes into charArr
    for (let c of binArr){
      charArr.push(String.fromCharCode(c));
    }
    
    // Join all characters in charArr
    charArr = charArr.join("");
    console.log(charArr);
    return charArr;
  }
  
  binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");

  binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001");
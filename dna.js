/*
The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character. */

function pairElement(str) {
    var arr = []
  
    for (let ele of str) {
      var capsule = [];
      capsule[0] = ele;
  
      switch (ele) {
        case "G": capsule[1] = "C";
        break;
        case "C": capsule[1] = "G";
        break;
        case "A": capsule[1] = "T";
        break;
        case "T": capsule[1] = "A";
        break;
      }
  
      arr.push(capsule);
    }
  
    return arr;
  }
  
  pairElement("GCG");

  pairElement("ATCGA");

  pairElement("TTGAG");

  pairElement("CTCTA");
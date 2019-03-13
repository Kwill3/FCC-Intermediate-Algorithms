var Person = function(firstAndLast) {

    let firstLast = firstAndLast.split(' ')
  
    this.getFullName = function() {
      return firstLast[0] + ' ' + firstLast[1];
    };
  
    this.getFirstName = function() {
      return firstLast[0];
    };
  
    this.getLastName = function() {
      return firstLast[1];
    };
  
    this.setFirstName = (first) => {
      firstLast[0] = first;
    };
  
    this.setLastName = (last) => {
      firstLast[1] = last;
    };
  
    this.setFullName = (full) => {
      firstLast = full.split(' ');
    };
    return firstAndLast;
  };
  
  var bob = new Person('Bob Ross');
  bob.getFullName();
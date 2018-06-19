// Constructor function
class SortedList = function() {
  this.items = [];
  this.length = 0;

  this.add = function (item) {
    this.items.push(item);
    this.length = this.items.length;
      return this.items.sort(function (a,b) {
       return a - b;
      });
    }
  this.get = function(pos) {
    if (pos-1 < 0 ||  pos-1 > this.length) {
      return "OutOfBounds" ;
    } else {
      return this.items[pos-1];
    };
  }

  this.max = function() {
    return this.items[this.length -1];
  }

  this.min = function() {
    return this.items[0];
  }
  
  this.sum = function() {
     var sum = 0;
       for(i=0; i<this.items.length; i++)
        sum += this.items[i];
      return sum;
  }
  
  this.average = function() {
    var sum = 0;
      for(i=0; i<this.items.length; i++)
        sum += this.items[i];
      return sum/this.items.length;
  }
  
 };

var sl = new SortedList (this.items, this.length);
console.log(sl);



module.exports = SortedList;


// vikings
class Soldier {
  //
}

class Vikings extends Soldier {
  constructor() {
    // Soldier.call(this) with the "super" method
    super();
    }
}


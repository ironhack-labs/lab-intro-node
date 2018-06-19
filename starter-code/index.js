// Constructor function
function SortedList() {
  this.items = [];
  this.length = 0;
  };

var sl = new SortedList (this.items, this.length);
console.log(sl);

//('#add function)
SortedList.prototype.add = function (item) {
  this.items.push(item);
  this.length = this.items.length;
  return this.items.sort(function (a,b) {
    return a - b;
    // if (a < b) { 
    //   return -1;
    // }
    // else if (a > b ) {
    //   return 1;
    // } 
    //  else {
    //   return 0;
    // };
  });
};

//'#get(i) function
SortedList.prototype.get = function(pos) {
  if (pos-1 < 0 ||  pos-1 > this.length) {
    return "OutOfBounds" ;
  } else {
    return this.items[pos-1];
  };
}

// Max function
SortedList.prototype.max = function() {
  return this.items[this.length -1];
}

// Min function
SortedList.prototype.min = function() {
  return this.items[0];
}

//Sum function
SortedList.prototype.sum = function() {
   var sum = 0;
     for(i=0; i<this.items.length; i++)
      sum += this.items[i];
    return sum;
}

// Average function
SortedList.prototype.average = function() {
  var sum = 0;
    for(i=0; i<this.items.length; i++)
      sum += this.items[i];
    return sum/this.items.length;
}


module.exports = SortedList;

var SortedList = function() {
  this.items = [];
  this.length = 0;
}

SortedList.prototype.add     = function(item) {
  this.items.push(item);
  this.length ++
  this.items.sort(function(a,b){
    return a-b;
  });
  }


SortedList.prototype.get     = function(pos) {
  if (pos <= this.items.length){
    return this.items[(pos-1)];
  } else {
    throw Error("OutOfBounds");
  }
  
  
}
SortedList.prototype.max     = function() {
  if (this.items.length==0) {
    throw Error ("EmptySortedList")
  } else {
    return Math.max.apply(null, this.items);
  }
}

SortedList.prototype.min     = function() {
  if (this.items.length==0) {
    throw Error ("EmptySortedList")
  } else {
  return Math.min.apply(null, this.items);
  }
}
SortedList.prototype.average = function() {
  if (this.items.length==0) {
    throw Error ("EmptySortedList")
  } else {
    var total = this.items.reduce(function(sum, amount){
      return sum + amount
    });
    return total/this.items.length;
    }

}
SortedList.prototype.sum     = function() {
  if (this.items.length==0) {
    throw Error ("EmptySortedList")
  } else {
    var total = this.items.reduce(function(sum, amount){
      return sum + amount
    });
    return total;
  }
}

module.exports = SortedList;



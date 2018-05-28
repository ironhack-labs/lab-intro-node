var SortedList = function() {
  this.items = [];
  this.length = this.items.length;
};


// SortedList.prototype.items = {};

// SortedList.prototype.length = SortedList.items.length;


SortedList.prototype.add = function(x) {
  
  this.items.push(x);
  return this.items.sort((a, b) => a - b);
}
SortedList.prototype.get = function(pos) {
  
  return this.items[pos-1];
}

SortedList.prototype.max     = function() {
  return Math.max(...this.items)
}

SortedList.prototype.min     = function() {
  return Math.min(...this.items)
}

SortedList.prototype.average = function() {
  if(this.items.length > 0){
   
    return this.items.reduce((a, b) => a + b) / this.items.length;

  } else{
    return 'EmptySortedList';
  }
  
}

SortedList.prototype.sum = function() {
  if(this.items.length > 1){
    return this.items.reduce((a, b) => a + b);

  } else if (this.items.length === 1){
    return this.items[0];
  
  } else {
    return 'EmptySortedList';
  }

}
module.exports = SortedList;

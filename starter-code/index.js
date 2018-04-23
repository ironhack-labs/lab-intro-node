var SortedList = function() {
  this.items = [],
  this.length = 0;
};

SortedList.prototype.add     = function(item) {
  if(this.length === 0){
    this.items.push(item);
    this.length++;
  } 
  else {
    for(var i = 0, j = this.length; i < j; i++){
      if(item <= this.items[i]){
        this.items.splice(i, 0, item);
        this.length++;
        break;
      }
      else if(i === j-1){
        this.items.push(item);
        this.length++;
      }
    }
  }
}
      
SortedList.prototype.get     = function(pos) {
  return this.items[pos-1];
}
SortedList.prototype.max     = function() {
  return this.items[this.length - 1];
}
SortedList.prototype.min     = function() {
  if(this.length > 0){
    return this.items[0];
  }
}
SortedList.prototype.average = function() {
  if(this.length > 0){
    var sum = this.sum();
    var avg = sum / this.length;
    return avg;
  }
}
SortedList.prototype.sum     = function() {
  if(this.length >0){
    var sum = this.items.reduce(function(accumulator, currentValue){
      return accumulator + currentValue;
    }, 0);
    return sum;
  }
}

module.exports = SortedList;
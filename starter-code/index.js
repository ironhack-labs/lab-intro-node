var SortedList = function() {
  this.items = [];
  this.length = this.items.length;
  
};

SortedList.prototype.add     = function(item) {
  this.items.push(item)
  this.length = this.items.length;
  this.items = this.items.sort(function(a,b){
    return a-b;
  });
}
SortedList.prototype.get     = function(pos) {
  if (pos < 0 || pos > this.length){
  return "error";
  }
return this.items[pos-1]
}

SortedList.prototype.max     = function() {
  var max = this.items[0];
  for (i=0; i<this.length; i++){
    if (this.items[i] > max ){
      max = this.items[i]
    }
  }
  return max;
}
SortedList.prototype.min     = function() {
  var min = this.items[0];
  for (i=0; i<this.length; i++){
    if (this.items[i] < min ){
      min = this.items[i]
    }
  }
  return min;
}

SortedList.prototype.average = function() {
  var avg = 0;
  for (i=0; i<this.length; i++){
    avg += this.items[i]
    }

  avg = avg/ this.length;
  return avg;
}

SortedList.prototype.sum     = function() {
  var sum = 0;
  for (i=0; i<this.length; i++){
    sum += this.items[i]
    }
  return sum;
}

module.exports = SortedList;

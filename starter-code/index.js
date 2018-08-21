var SortedList = function() {
  this.items = [];
  this.length = 0;
};

SortedList.prototype.add = function(item) {
  this.items.push(item);
  this.items.sort((a,b)=> a-b);
  this.length++;
}

SortedList.prototype.get = function(pos) {
    return this.items[pos-1]
}

SortedList.prototype.max     = function() {
  return Math.max(...this.items)
}

SortedList.prototype.min     = function() {
  return Math.min(...this.items)
}

SortedList.prototype.average = function() {
  return this.sum()/this.length
}

SortedList.prototype.sum     = function() {
  if (this.length != 0){
    return this.items.reduce((acc,val)=>acc+val)
  }
}

module.exports = SortedList;

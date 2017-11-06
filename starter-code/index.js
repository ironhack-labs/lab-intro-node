var SortedList = function() {
  this.length = [];
};

SortedList.prototype.add = function(item) {
  this.length.push(item)
  this.length.sort();
}
SortedList.prototype.get = function(pos) {
  if (this.length.length === 0){
    return "OutOfBounds";
  } else {
  return this.length[pos-1];
}
}
SortedList.prototype.max = function() {
  if (this.length.length === 0){
    return [];
  } else{
  return Math.max(this.length);
  }
}
SortedList.prototype.min = function() {
  return Math.min(this.length);
}
SortedList.prototype.average = function() {

}
SortedList.prototype.sum     = function() {}
SortedList.prototype.size    = function() {
  return this.size();
}

module.exports = SortedList;

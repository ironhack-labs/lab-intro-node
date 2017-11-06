var SortedList = function() {
  this.length = [];
  // this.length = this.list.length;
};

SortedList.prototype.add     = function(item) {
this.length.push(item);
this.length.sort(function(a,b){
  return a - b;
});
};
SortedList.prototype.get     = function(pos) {
  return this.length[pos-1];
};
SortedList.prototype.max     = function() {
  return this.length[this.length.length-1];
};
SortedList.prototype.min     = function() {
  return this.length[0];
};
SortedList.prototype.average = function() {
  if(this.length.length!==0){
  return this.sum/(this.length.length);
}
};
SortedList.prototype.sum     = function() {
  if(this.length.length!==0){
  this.length.reduce(function(a,b){
    return a + b;
  });
}
};

module.exports = SortedList;

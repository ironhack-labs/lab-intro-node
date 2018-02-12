var SortedList = function() {
  this.items = [];
  this.length = this.items.length;
};

SortedList.prototype.add     = function(item) {
  this.items.push(item);
  this.length=this.items.length;
  this.items.sort(function(a,b){
    return a-b;
  });
}
SortedList.prototype.get     = function(pos) {
  return this.items[pos-1];
};

SortedList.prototype.max     = function() {
  return this.items[(this.items.length)-1];
}
SortedList.prototype.min     = function() {
  return this.items[0];
}
SortedList.prototype.average = function() {
  var sum =0;
  this.items.forEach(function(element) {
    sum+=parseInt(element);

  });
  return sum/this.items.length;

}
SortedList.prototype.sum     = function() {
  var sum =0;
  this.items.forEach(function(element){
    sum += parseInt(element);
  });
  return sum
}

module.exports = SortedList;

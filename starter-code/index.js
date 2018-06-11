var SortedList = function() {
  this.items = [];
  this.length = 0;
};

SortedList.prototype.add     = function(item) {
  this.items.push(item)
  this.length++
  return this.items.sort((a,b) => a-b ).slice(0)
  
}

SortedList.prototype.get     = function(pos) {
  return this.items[pos-1];
}

SortedList.prototype.max     = function() {
  if (this.length === 0)
    return undefined;
  else
    return this.items[this.length-1];
}

SortedList.prototype.min     = function() {
  return this.items[0];
}

SortedList.prototype.average = function() {
  if (this.length === 0)
    return "EmptySortedList";
  else
    return (this.items.reduce((a,b) => a+b , 0)) / this.length;
}

SortedList.prototype.sum     = function() {
  return this.items.reduce((a,b) => a+b , 0); 
}

module.exports = SortedList;

// var test = new SortedList
// test.add(2)
// test.add(5)
// test.add(1)
// console.log(test.get(1))

// console.log(test)
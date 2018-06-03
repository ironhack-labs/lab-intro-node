var SortedList = function() {
  this.length = 0;
  this.items = [];
};

//not passing, not sure why not
SortedList.prototype.add = function(item) {
  this.items.push(item);
  this.items.sort(function(a,b) {
    return a-b;
  });
  this.length++;
}

//not passing, not sure why not
SortedList.prototype.get     = function(i) {
  this.items.find(function(element) {
    return element === i;
  })

}
SortedList.prototype.max     = function() {
  return Math.max.apply(null, this.items);
}
SortedList.prototype.min     = function() {
  return Math.min.apply(null, this.items);
}
SortedList.prototype.average = function() {
  return this.items.reduce((a,b) => a + b, 0) / this.items.length
}
SortedList.prototype.sum     = function() {
  return this.items.reduce(function(a,b){
    return a + b
  }, 0);
}

module.exports = SortedList;
let items1 = new SortedList();
items1.add(8);
items1.add(10);
items1.add(25);
items1.add(6);

console.log(items1)
console.log(items1.max())
console.log(items1.average())
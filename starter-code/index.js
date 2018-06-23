var SortedList = function() {
  this.items = [];
  this.length = this.items.length;
};

SortedList.prototype.add = function(item) {
  this.items.push(item);
  this.items.sort(function (a,b){
    return a-b;
  });
  this.length = this.items.length;
}
SortedList.prototype.get = function(pos) {
  return this.items[pos-1];
}
SortedList.prototype.max = function(pos) {
  return Math.max.apply(null, this.items);//convierte el arreglo en una lista de elementos y se lo pasa a max, null es para alicar el ar
}
SortedList.prototype.min     = function() {
  return Math.min.apply(null, this.items);//convierte el arreglo en una lista de elementos y se lo pasa a max, null es para alicar el ar
}
SortedList.prototype.average = function() {
  return this.sum()/this.length;
  if (this.length==0){
    throw new Error ("EmptySortedList");
  }
}
SortedList.prototype.sum     = function() {
  if (this.length==0){
    throw new Error ("EmptySortedList");
  }
  return this.items.reduce(function(total,item){
    return total+item;
  })
}

module.exports = SortedList;

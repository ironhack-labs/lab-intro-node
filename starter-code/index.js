var SortedList = function() {
  this.items = [];
  this.length = 0;
};






SortedList.prototype.add  = function(item) {
   this.items.push(item);
  // this.items.sort(item);  
  this.items.sort(function(a, b){return a > b}); 
  this.items
  this.length++;


}
SortedList.prototype.get     = function(pos) {
  return this.items[pos-1];

}
SortedList.prototype.max     = function() {
  
 
    return Math.max.apply(null, this.items);
  
}
SortedList.prototype.min     = function() {
  return Math.min.apply(null, this.items);
}
SortedList.prototype.average = function() {

  // const arrAvg = arr => arr.reduce((a,b) => a + b, 0) / arr.length

  return this.items.reduce((a,b) => a + b, 0) / this.items.length
  
}
SortedList.prototype.sum     = function() {


  
  return this.items.reduce(function(a,b){
    return a + b
  }, 0);



}

module.exports = SortedList;


// var sl = new SortedList;
// sl.add(20);
// sl.add(10);
// console.log(sl.get(1))
// console.log(sl.get(2));


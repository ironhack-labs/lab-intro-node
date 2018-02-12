var SortedList = function() {
  this.items = [];
  this.length = this.items.length;
};

 SortedList.prototype.add     = function(item) {
 this.items.push(item);
 this.length = this.items.length;
 this.items.sort(function(a,b){
   return a-b;
 });
 
}

SortedList.prototype.get     = function(pos) {

    return this.items[pos -1];

}


SortedList.prototype.max     = function(items) {
  return Math.max(...this.items); // spread Ecma6
}



SortedList.prototype.min     = function(items) {
  return Math.min(...this.items);
}



SortedList.prototype.average = function(items) {
var sum = 0;
for( var i = 0; i < this.items.length; i++ ){
    sum += parseInt( this.items[i], 10 ); //don't forget to add the base
}

return sum/this.items.length;
 
}

// a is the accumulator, b is the current value
//0 is the initial value
SortedList.prototype.sum     = function(items) {
return this.items.reduce(function(a,b){
  return a+b;
},0);
}
//const sum = this.items=> this.items.reduce(a,b)=> a+b,0)

module.exports = SortedList;

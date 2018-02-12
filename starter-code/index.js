var SortedList = function(items, length) {
    this.items = [];
    this.length = 0;
 };
    
 SortedList.prototype.add     = function(item) {
    this.items.push(item);
    this.items.sort((a,b)=>{
        return a - b;
      });
    this.length = this.items.length;
 };
 
 SortedList.prototype.get     = function(pos) {
    if(this.length === 0)
        return;
    return this.items[pos - 1];
 }
 SortedList.prototype.max     = function() {
    if(this.length === 0)
        return;
    return this.items[this.length - 1];
 }
 SortedList.prototype.min     = function() {
    if(this.length === 0)
        return;
    return this.items[0];
 }


 SortedList.prototype.average = function() {
    return this.sum() / this.items.length; 
    
 }


 SortedList.prototype.sum     = function() {
    if(this.length === 0)
        return;
    var sum = this.items.reduce(function(acc, item){
        return acc + item;
    })
    return sum;
 }
 
 module.exports = SortedList;
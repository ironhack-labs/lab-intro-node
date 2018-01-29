var SortedList = function() {
    this.items = [];
    this.length = this.items.length;
};

SortedList.prototype.add = function(item) {
    this.items.push(item);
    this.items.sort(function(a,b){
        return a - b;
    });
    this.length++;
    
};
SortedList.prototype.get = function(pos) {  
   return this.items[pos-1]; 
};
SortedList.prototype.max     = function() {
  return this.items.pop();  
};
SortedList.prototype.min     = function() {
    return this.items[0];
};
SortedList.prototype.average = function() {
    var total = 0;
for(var i = 0; i < this.length; i++) {
    total += this.items[i];
}
var avg = total / this.length;
return avg;
};
SortedList.prototype.sum  = function() {
     if (this.length === 0){
         return 'EmptySortedList';
     } else {
        var reducer = function (accumulator, current){ 
            return accumulator + current;
        };
        return this.items.reduce (reducer);
     }
};


module.exports = SortedList;

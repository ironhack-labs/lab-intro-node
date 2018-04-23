// var SortedList = function() {
   
// };

// SortedList.prototype.add     = function(item) {}
// SortedList.prototype.get     = function(pos) {}
// SortedList.prototype.max     = function() {}
// SortedList.prototype.min     = function() {}
// SortedList.prototype.average = function() {}
// SortedList.prototype.sum     = function() {}

// module.exports = SortedList;



var SortedList = function() {
    this.items = [];
    this.length = 0;
};
var sortedList = new SortedList();
SortedList.prototype.add     = function(item) {
    this.items.push(item);
    this.items.sort(function(a, b) {
        return a - b;
    });
    
    this.length = this.items.length;
}
SortedList.prototype.get     = function(pos) {
    return this.items[pos-1];
}
SortedList.prototype.max     = function() {
    if(this.items[0] === undefined) {
        return 'EmptySortedList';
    } else {
        var max = this.items.reduce(function(a, b){
            return Math.max(a, b);
        });
        return max;
    }
}
SortedList.prototype.min     = function() {
    if(this.items[0] === undefined) {
        return 'EmptySortedList';
    } else {
            return Math.min(...this.items);
    };
}
SortedList.prototype.average = function() {
    if(this.items[0] === undefined) {
        return 'EmptySortedList';
    } else {
            return (this.sum() / this.items.length);
    };
}
SortedList.prototype.sum     = function() {
    if(this.items[0] === undefined) {
        return 'EmptySortedList';
    } else {
            return this.items.reduce(function(total, currentValue){
                return total + currentValue;
            });
    };
}
module.exports = SortedList;
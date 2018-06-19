var SortedList = function() {
    this.items = [];
    this.length = this.items.length;
};

SortedList.prototype.add = function(item) {
    this.items.push(item);
    this.length++;    
    
    this.items.sort(function(first, second){
        return first > second;
    });
};

SortedList.prototype.get = function(pos) {  
    return this.items[pos - 1];
};

SortedList.prototype.max = function() {
    return this.items[this.length - 1];
};

SortedList.prototype.min = function() {
    return this.items[0];
};

SortedList.prototype.average = function() {
    return this.items.reduce(function(acc, elem, index, array){
        return index < array.length -1 ? acc + elem : (acc + elem)/ array.length;
    }, 0);
};

SortedList.prototype.sum = function() {
    return this.items.reduce(function(acc, elem){
        return acc + elem;
    }, 0);
};

module.exports = SortedList;
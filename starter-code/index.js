var SortedList = function() {
    this.items = [];
    this.length = this.items.length;
};

SortedList.prototype.add     = function(item) {
    this.items.unshift(item);
    this.length = this.items.length;
    this.items.sort(function(a, b){
        return a - b;
    });
}

SortedList.prototype.get     = function(pos) {
    return this.items[pos - 1];
}

SortedList.prototype.max     = function() {
    return this.items[this.length-1];
}

SortedList.prototype.min     = function() {
    return this.items[0];
}
SortedList.prototype.average = function() {
    return this.sum()/this.length;
}
SortedList.prototype.sum     = function() {
    if(!(this.length === 0)){
        var sum = this.items.reduce(function(accumulator, currentValue){
            return accumulator + currentValue;
        });
    
        return sum;

    } else {
        return this.items;
    }
}

module.exports = SortedList;

var SortedList = function(items, length) {
    this.items = [];
    this.length = 0;
}

SortedList.prototype.add     = function(item) {
    this.items.unshift(item);
    this.length= this.items.length;
    var result = this.items.sort((a, b) => {return a - b});
    this.items = result;
}

SortedList.prototype.get     = function(pos) {
    if (pos < 1 || pos > this.items.length) {
        throw Error("OutOfBounds");
    }
    return this.items[pos - 1];
}

SortedList.prototype.max     = function() {
    return Math.max.apply(null, this.items);

}
SortedList.prototype.min     = function() {
    return Math.min.apply(null, this.items);
}
SortedList.prototype.average = function() {
    var total = 0;
    for (i = 0; i < this.items.length; i ++){
        total += this.items[i];
    } 
        var avg = total / this.items.length;
        return avg;
}
SortedList.prototype.sum     = function() {
    var total = 0;
    for (i = 0; i < this.items.length; i ++){
        total += this.items[i];
    }
    return total;
}

module.exports = SortedList;
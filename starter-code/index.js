var SortedList = function(items, length) {
    this.items = [];
    this.length = 0;
};

SortedList.prototype.add     = function(item) {
    this.items.unshift(item);
    this.length = this.items.length;
    var result = this.items.sort((a, b) => {return a - b});
    this.items = result;
}

// The method will get the ith value in the list
// You should also provide a length property that gives the length of the list.
SortedList.prototype.get     = function(pos) {
    if(pos < 1 || pos > this.items.length){
        throw Error('OutOfBounds')
    }

    return this.items[pos-1];
    
}

//Should return the max value of the array
SortedList.prototype.max     = function() {
    return Math.max(...this.items);
}
SortedList.prototype.min     = function() {
    return Math.min.apply(null, this.items);
}
SortedList.prototype.average = function() {
    var total =0;
    for (i=0;i<this.items.length; i++){
        total += this.items[i]
    }
    var average = total/this.items.length;
    return average;
}

SortedList.prototype.sum     = function() {
    var total =0;
    for (i=0;i<this.items.length; i++){
        total += this.items[i]
    }
    return total;
}

module.exports = SortedList;

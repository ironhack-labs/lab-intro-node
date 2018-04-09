var SortedList = function() {
    this.length = 0;
    // this.items = items;
    this.items = [];
};

SortedList.prototype.add     = function(item) {
    this.items.push(item);
    function sortByNumberSizeFunction(a, b) {
        return a-b;
    }
    this.items.sort(sortByNumberSizeFunction);
    this.length = this.length + 1;
};

SortedList.prototype.get     = function(pos) {
    if (this.items.length < pos) {
        throw new Error('OutOfBounds')
    } else {
        console.log(this.items)
        console.log(this.items[pos-1])
        return this.items[pos-1];
    }
};

SortedList.prototype.max     = function(items) {
    if (this.items.length === 0) {
        throw new Error ('EmptySortedList') 
    } else {
        return Math.max(...this.items);
    }
};

SortedList.prototype.min     = function(items) {
    if (this.items.length === 0) {
        throw new Error ('EmptySortedList') 
    } else {
        return Math.min(...this.items);
    }
};

SortedList.prototype.average = function() {
    return (this.sum())/this.length; 
}

SortedList.prototype.sum     = function() {
    if (this.items.length === 0) {
        throw new Error ('EmptySortedList') 
    } else {
       return this.items.reduce(function (a, b) {
            return a + b;
    }, 0); 
}
};


module.exports = SortedList;

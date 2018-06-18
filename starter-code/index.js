var SortedList = function() {
    this.items = [];
    this.length = this.items.length
};

SortedList.prototype.add     = function(item) {
    if (this.length < 1){
        this.items.push(item);
        this.length = this.items.length;
    } else {
        this.items.push(item);
        this.items.sort(function(a,b){
            return a-b;
        });
        this.length = this.items.length;
    };
}


SortedList.prototype.get     = function(pos) {
    if (pos > this.length){
        return Error("OutOfBounds");
    } else {
        return this.items[pos-1];
    }
}

SortedList.prototype.max     = function() {
    this.items.sort(function(a,b){
        return a-b;
    });
    return this.items[this.length-1]
}

SortedList.prototype.min     = function() {
    this.items.sort(function(a,b){
        return a-b;
    });
    return this.items[0];
}

SortedList.prototype.average = function() {
    var test = this.items.reduce(function(acc, value){
        return acc + value;
    },0)
    return test/this.length;
}

SortedList.prototype.sum     = function() {
    var test = this.items.reduce(function(acc, value){
        return acc + value;
    },0)
    return test;
}

module.exports = SortedList;

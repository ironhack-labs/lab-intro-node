var SortedList = function(){
    this.items = [];
    this.length = this.items.length;
};

SortedList.prototype.add     = function(item) {
    this.items.push(item);
    if (this.items.length > 1){
        this.items.sort(function (numA, numB){
        return numA-numB;
        });
    }
    this.length = this.items.length;
}

SortedList.prototype.get     = function(pos) {
    return this.items[pos-1];
}

SortedList.prototype.max     = function() {
    var max = 0;
    if (this.items.length === 0){
        return max;
    }
    else {
        var max = this.items.reduce(function (a,b){
        return Math.max(a,b);
        });
    }
    return max;
}

SortedList.prototype.min     = function() {
    var min = 0;
    if (this.items.length === 0){
        return min;
    }
    else {
        var min = this.items.reduce(function (a,b){
        return Math.min(a,b);
        });
    }
    return min;
}

SortedList.prototype.average = function() {
    // if (this.items.length === 0){
    //     return 0;
    // }
    // else {
    //     return (this.items.sum() / this.items.length);
    // }
    var result = 0;
    if (this.items.length === 0) {
        return result;
    }
    else {
        var result = this.items.reduce (function (acc, oneNumber){
            return acc + oneNumber;
        })
    }
    return result/this.items.length;
}

SortedList.prototype.sum     = function() {
    var result = 0;
    if (this.items.length === 0) {
        return result;
    }
    else {
        var result = this.items.reduce (function (acc, oneNumber){
            return acc + oneNumber;
        })
    }
    return result;
}

module.exports = SortedList;

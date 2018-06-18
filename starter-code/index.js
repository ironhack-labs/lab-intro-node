var SortedList = function() {
    this.items = [];
    this.length = this.items.length;
};

SortedList.prototype.get= function(pos) {
    return this.items[pos-1];
    // if (pos <1){
    //     return 0;
    // } else {
    // return this.items[pos-1];
    // }
}

SortedList.prototype.add     = function(item) {
    this.items.push(item);
    this.length = this.items.length;
    this.items.sort(function(a,b){
        return a-b;
    });
}

SortedList.prototype.max     = function() {
    var i = this.items.length - 1;
    return this.items[i];
    // return this.items[this.items.length]
}


SortedList.prototype.min = function() {
    return this.items[0];
}
SortedList.prototype.average = function() {
    var sum = this.items.reduce(function(total,num){
    return total + num;
    },0)
    return sum/this.length;
}

SortedList.prototype.sum = function() {
var sum = this.items.reduce(function(total,num){
    return total + num;
    },0)
    return sum;
}

module.exports = SortedList;

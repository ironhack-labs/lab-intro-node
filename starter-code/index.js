var SortedList = function() {
    this.items = [];
    this.length = 0;
};

SortedList.prototype.add     = function(item) {
    this.items.push(item);
    this.length++;
    this.items.sort(function (a, b){
      return a - b;
    });
}
SortedList.prototype.get     = function(pos) {
    if(pos > this.length){
        return "OutOfArrayIndex";
    }
    else {
        return this.items[pos-1];
    }
}
SortedList.prototype.max     = function() {
    return this.items[this.length-1];
}
SortedList.prototype.min     = function() {
    return this.items[0];
}
SortedList.prototype.average = function() {
    if (this.length === 0){
        return "DividedByZero";
    }
    else {
        return this.sum()/this.length; 
    }
}
SortedList.prototype.sum     = function() {
    var sum = 0;
    for (var i = 0; i < this.items.length; i++){
        sum += this.items[i];
    }
    return sum;
}

module.exports = SortedList;
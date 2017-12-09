var SortedList = function() {
    this.items = [];
    this.length = 0;
};

SortedList.prototype.add     = function(x) {
    this.items.push(x);
    this.length++;
    this.items.sort(function (a, b){
        if (a < b){
            return -1;
        }
        if (a > b){
            return 1;
        }
        return 0;
    });
}
SortedList.prototype.get     = function(pos) {
    if(pos > this.length){
        return "OutOfBounds";
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
        return "EmptySortedList";
    }
    else 
    {return this.sum()/this.length; }
}
SortedList.prototype.sum     = function() {
    var sum = 0;
    for (var i =0; i<this.length; i++){
        sum += this.items[i];
    }
    return sum;
}

module.exports = SortedList;

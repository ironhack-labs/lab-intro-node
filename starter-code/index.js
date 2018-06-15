var SortedList = function() {
    this.items = [];
    this.length = 0;
};

SortedList.prototype.add     = function(item) {
    this.items.push(item);
    this.length++;
    this.items.sort(function(a,b){
        return a - b;
    });

}
SortedList.prototype.get     = function(pos) {
    return this.items[pos - 1];
}
SortedList.prototype.max     = function() {
    return this.items[this.length - 1];
}
SortedList.prototype.min     = function() {
    return this.items[0];
}
SortedList.prototype.average = function() {
    return this.items.reduce(function(acc, currentValue, currentIndex, arr){
        if (currentIndex < arr.length - 1) {
            return acc + currentValue;
        } else {
            return (acc + currentValue) / arr.length;
        }
    }, 0)
}
SortedList.prototype.sum     = function() {
    return this.items.reduce(function(acc, currentValue){
        return acc + currentValue;
    }, 0)
}

/* var list = new SortedList();
list.add(21);
list.add(20);
list.add(1);
list.max(); */
module.exports = SortedList;

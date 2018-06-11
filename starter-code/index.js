var SortedList = function() {
    this.items = [],
    this.length = this.items.length
};

SortedList.prototype.add     = function(item) {
    this.items.push(item);
    this.items.sort(function (a, b) {
        return a - b;
    });
    this.length = this.items.length
};
SortedList.prototype.get     = function(pos) {
    return this.items[pos - 1];

}
SortedList.prototype.max     = function() {
    return this.items[this.length -1];
}
SortedList.prototype.min     = function() {
    return this.items[0];
}
SortedList.prototype.average = function() {
    
    return this.sum() / this.length;
}
SortedList.prototype.sum     = function() {
    return this.items.reduce(function(prev, current) {
        return prev + current;
    }, 0);
}

module.exports = SortedList;


var ourList = new SortedList;

ourList.add(5);
ourList.add(100);
ourList.add(2);
// ourList.add(7);
// ourList.add(55);
// ourList.add(100);
console.log(ourList.items)
// console.log(ourList.length);
console.log(ourList.average())
// console.log(ourList.get(2));
var SortedList = function() {
    this.items = [];
    this.length = this.items.length;
};

SortedList.prototype.add     = function(item) {
    this.items.push(item);
    this.length = this.items.length;
    this.items.sort(function(a, b){
        return a-b;
    });
}
SortedList.prototype.get     = function(pos) {
    return this.items[pos-1];
}
SortedList.prototype.max     = function() {
    return Math.max(...this.items);
}
SortedList.prototype.min     = function() {
    return Math.min(...this.items);
}
SortedList.prototype.average = function() {
    if (this.length > 0)
    return this.items.reduce((a, b) => a + b)/this.length
}
SortedList.prototype.sum     = function() {
    if (this.length > 0)
    return this.items.reduce((a, b) => a + b)
}

module.exports = SortedList;

sl = new SortedList();
sl.add(20);
sl.add(10);
console.log(sl);
var foo = 10;
for(i=1; i<200; i++) {
    sl.add(foo*i);
    // console.log(sl.get(i), foo*i);
}
// console.log(sl.items);
strin = sl.items;
// console.log(strin.reduce((a, b) => a + b));
console.log(sl.average())
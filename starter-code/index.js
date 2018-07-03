var SortedList = function() {
    this.items = [];
    this.length = 0;
};

SortedList.prototype.add     = function(item) {

    this.length=this.items.push(item);
    this.items.sort(function(a,b){
        return a-b;
    });
}
SortedList.prototype.get     = function(pos) {
    if (this.length < pos-1) return "error";
    console.log(this.items[pos-1]);
    return this.items[pos-1];
}
SortedList.prototype.max     = function() {
    var max = this.items[0];
    this.items.forEach(function(element){
        if (element > max) max = element;
    });
    return max;
}
SortedList.prototype.min     = function() {
    var min = this.items[0];
    this.items.forEach(function(element){
        if (element < min) min = element;
    });
    return min;
}
SortedList.prototype.average = function() {
    return this.sum()/this.length;
}
SortedList.prototype.sum     = function() {
    var sum = 0;
    this.items.forEach(function(element){
        sum += element;
    });
    return sum;
}

module.exports = SortedList;

var sl = new SortedList();
sl.add(1);
sl.add(2);
sl.add(5);
sl.add(3);
sl.get(2);

var SortedList = function() {
    this.items = [];
    this.length = this.items.length;
}

SortedList.prototype.add = function(item) {
    this.items.push(item);
    this.items.sort(function(a,b){
       return a - b;

});
this.length = this.items.length;
}
SortedList.prototype.get     = function(pos) {
    var res = this.items[pos - 1]
    return res;
}
SortedList.prototype.max     = function() {
    var max = this.items[this.items.length - 1];
    return max;
}
SortedList.prototype.min     = function() {
    var min = this.items[0];
    return min;
}
SortedList.prototype.average = function() {
    var total = 0;
    this.items.forEach(function(e){
        total += e;
        return total;
    });
    return total/this.items.length;
}
SortedList.prototype.sum     = function() {
    var tot = 0;
    this.items.forEach(function(e){
    tot += e;
});
    return tot;
};

    module.exports = SortedList;




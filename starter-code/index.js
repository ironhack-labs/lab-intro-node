var SortedList = function() {
    this.items = [];
    this.length = 0;
};

SortedList.prototype.add = function(item) {
    this.items.push(item);
    this.length++;
    this.items.sort(function(item1,item2){
        return item1 - item2;
    })
}

SortedList.prototype.get = function(pos) {
    return this.items[pos - 1];
}

SortedList.prototype.max     = function() {
    return this.items[this.length - 1];
}

SortedList.prototype.min     = function() {
    return this.items[0];
}

SortedList.prototype.average = function() {
    return this.items.reduce(function(acc, item , index , array){
        return index < array.length - 1  ? acc + item : (acc + item)/ array.length
    },0);
}

SortedList.prototype.sum  = function() {
    return this.items.reduce(function(acc, item){
        return acc + item;
    },0);
}

module.exports = SortedList;

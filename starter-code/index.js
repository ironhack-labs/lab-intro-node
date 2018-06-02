var SortedList = function() {
    this.items = [];
    this.length = 0;
};

SortedList.prototype.add  = function(item) {
        this.length += 1;
        this.items.push(item);
        this.items = this.items.sort(function(a, b){return a-b});
}
SortedList.prototype.get = function(pos) {
    return (this.items[pos-1] == undefined) ? false : this.items[pos-1];
}
SortedList.prototype.max     = function() {
    if(this.length == 0){return 'EmptyList';}
    let max = 0;
    this.items.forEach(i => {
        if(i >= max){
            max = i;
        }
    });
    return max;
}
SortedList.prototype.min     = function() {
    if(this.length == 0){return 'EmptyList';}
    let min = null;
    this.items.forEach(i => {
        if(min == null){
            min = i;
        }else if(i <= min){
            min = i;
        }
    });
    return min;
}
SortedList.prototype.average = function() {
    if(this.length == 0){return 'EmptySortedList';}
    return this.sum() / this.length;
}
SortedList.prototype.sum     = function() {
    if(this.length == 0){return 'EmptySortedList';}
    let sum = 0;
    this.items.forEach(i => {
       sum += i;
    });
    return sum;
}

module.exports = SortedList;

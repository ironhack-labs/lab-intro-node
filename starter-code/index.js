var SortedList = function() {
    // this=[];
    this.items=[];
    this.length=this.items.length;
};

SortedList.prototype.add     = function(item) {
    this.items.push(item);
    this.items.sort( function(a,b){
        return a - b;
    });
    this.length+=1;


}
SortedList.prototype.get     = function(pos) {
    return this.items[pos-1];
}
SortedList.prototype.max     = function() {
    return this.items[this.items.length - 1];
}
SortedList.prototype.min     = function() {
    return this.items[0];
}
SortedList.prototype.average = function() {
    return this.sum()/this.items.length;
}
SortedList.prototype.sum     = function() {
    if (this.items.length === 0) {
        var e = new Error('EmptySortedList'); 
        // e.message is 'Could not parse input'
        throw e;
    }
    return this.items.reduce(function (sum,curr) {
        return sum+curr;
    }, 0)
}

module.exports = SortedList;

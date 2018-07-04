var SortedList = function() {
    this.length = 0;
    this.items = [];
};

SortedList.prototype.add = function(item) {
    this.items.push(item);
    this.length = this.items.length

    this.items.sort((a,b) =>{
        return a -b;
    })
    this.length++
};
SortedList.prototype.get     = function(pos) {
    return this.items[pos -1]
}
SortedList.prototype.max     = function() {
    return Math.max(this.items)
}
SortedList.prototype.min     = function() {
    return Math.min(this.items)
}
SortedList.prototype.average = function() {
    if(this.items.length === 0){
        console.log("EmptySortedList");
    }
    return this.sum()/this.items.length;
}
SortedList.prototype.sum     = function() {
    return this.items.reduce((acc,current)=>acc + current,0)
}

module.exports = SortedList;

var SortedList = function() {
    this.items = [];
    this.length = 0;
};

SortedList.prototype.add     = function(item) {
    if(typeof item !== "number") {
        console.log("debes introducir un número");
        return;
    }
    this.items.push(item);
    this.length = this.items.length;
    this.items = this.items.sort(function(a, b){return a-b});
    //console.log(this.items);
    return this.items;
}
SortedList.prototype.get     = function(pos) {
    // if(pos > this.length - 1) {
    //     //console.log(this.length - 1);
    //     //console.log("the position you search does not exist, please try until "+(this.length - 1));
    //     return;
    // }
    
    return this.items[pos];
}
SortedList.prototype.max     = function() {
    //console.log(Math.max(...this.items));
    if (this.items.length < 1) throw new Error("EmptySortedList");
    //return Math.max.apply(this.items);
    return Math.max(...this.items);
}
SortedList.prototype.min     = function() {
    if (this.items.length < 1) throw new Error("EmptySortedList");
    return Math.min(...this.items);
}
SortedList.prototype.average = function() {
    var sum = 0;
    for(var i of this.items){
        sum+=i;
    }
    //console.log(sum/this.length);
    return sum / this.length;
}
SortedList.prototype.sum     = function() {
    var sum = 0;
    for(var i of this.items){
        sum+=i
    }
    //console.log(sum);
    return sum;
}

module.exports = SortedList;

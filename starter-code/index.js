var SortedList = function() {
    this.list = [];
    this.length = 0;
};



SortedList.prototype.add     = function(item) {
    this.list.push(item);
    this.list = this.list.sort(function(a,b) {
        return a - b;
    });
    this.length++; 
}
SortedList.prototype.get     = function(pos) {
    return this.list[pos - 1];
}
SortedList.prototype.max     = function() {
    var maxNum = null;
    for(var i = 0; i < this.list.length; i++){
        if(this.list[i]> maxNum){
            maxNum = this.list[i];
        }
    } return maxNum;
}
SortedList.prototype.min     = function() {
    var minNum = null;
    for(var i = 0; i < this.list.length; i++){
        if(minNum === null){
            minNum = this.list[i];
        }
        if(this.list[i] < minNum){
            minNum = this.list[i];
        }
    } return minNum;
}
SortedList.prototype.average = function() {
    var numAverage = null;
    for(var i = 0; i < this.list.length; i++){
        numAverage += this.list[i];
    }
    return numAverage/this.list.length;
}
SortedList.prototype.sum     = function() {
    var total = null;
    for(var i = 0; i < this.list.length; i++){
        total += this.list[i];
    }
    return total;
}
// SortedList.prototype.size    = function() {
//     return SortedList.length();
// }

var sl = new SortedList();

module.exports = SortedList;

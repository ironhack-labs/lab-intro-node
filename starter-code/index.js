var SortedList = function() {
   this.length = [];
    
};

SortedList.prototype.add     = function(item) {
    this.length.push(item);
    this.length.sort(function (a,b) {
        return a - b;        
    });
    
}
SortedList.prototype.get     = function(pos) {
    return this.length[pos - 1];
}
SortedList.prototype.max     = function() {
    return this.length[this.length.length -1 ];
}
SortedList.prototype.min     = function() {
    return this.length [0];
}
SortedList.prototype.average = function() {
    return ((this.max() + this.min())/2);
}
SortedList.prototype.sum     = function() {

}
module.exports = SortedList;


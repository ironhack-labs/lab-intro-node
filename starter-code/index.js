var SortedList = function() {
this.items = [];
this.length = 0;



};

SortedList.prototype.add     = function(item) {

    this.items.push(item);
    this.items.sort((a,b) => a - b )  ;
    this.length++;  



};
SortedList.prototype.get     = function(pos) {
return this.items[pos-1];

};
SortedList.prototype.max     = function() {
return this.items[this.length-1];


};
SortedList.prototype.min     = function() {
    return this.items[0];
};
SortedList.prototype.average = function() {
    return this.sum()/this.length;  
    
};
SortedList.prototype.sum     = function() {
    return this.items.reduce( (a,c) => {return a + c}, 0)
};

module.exports = SortedList;

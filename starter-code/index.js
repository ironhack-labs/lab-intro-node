var SortedList = function() {};

SortedList.prototype.add     = function(item) {}
SortedList.prototype.get     = function(pos) {}
SortedList.prototype.max     = function() {}
SortedList.prototype.min     = function() {}
SortedList.prototype.average = function() {}
SortedList.prototype.sum     = function() {}

var SortedList = function(items = []){
    this.items = items;
    this.length = items.length;
};
SortedList.prototype.add = function(item) {
    this.items.push(item);
    this.length++;
}

SortedList.prototype.get = function(pos) {
    return this.items[pos-1];
};


SortedList.prototype.max = function() {
    return this.items[this.length -1];
};


SortedList.prototype.min = function(){
    return this.items[0];

};

SortedList.prototype.average = function(){ 
    return this.items.reduce(function(acc,elem){
        return Index(acc+Index(elem.rate));
    },0)/items.length).toFixed(2);
};

SortedList.prototype.sum = function(){
    return this.items.reduce(function(acc,elem){
        return acc+elem;
    } ,0);
    };



module.exports = SortedList;

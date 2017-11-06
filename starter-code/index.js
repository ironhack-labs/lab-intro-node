var SortedList = function() {
  this.length = 0;
  this.list = [];
};

SortedList.prototype.add     = function(item) {
    this.list.push(item);
    this.length++;
    this.list.sort(function(a,b){
        return a -b;
    });
    }
}
SortedList.prototype.get     = function(pos) {
    if(pos < this.list.length){
        return this.list[pos];
    }
    else{
        return "OutOfBounds";
    }
}


SortedList.prototype.max     = function() {}
SortedList.prototype.min     = function() {}
SortedList.prototype.average = function() {}
SortedList.prototype.sum     = function() {}

module.exports = SortedList;
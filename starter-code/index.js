var SortedList = function () {

    this.list = [];
    // console.log(this.list);
};

SortedList.prototype.add = function(item) {

    this.list.push(item);
    console.log(this.list);

};

SortedList.prototype.get     = function(pos) {};
SortedList.prototype.max     = function() {};
SortedList.prototype.min     = function() {};
SortedList.prototype.average = function() {};
SortedList.prototype.sum     = function() {};

module.exports = SortedList;

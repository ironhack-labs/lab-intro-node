
function SortedList () {
  // var self = this;

this.items = [];
this.length = this.items.length;
}

// ? 
SortedList.prototype.add     = function(x) {
  // var self = this;
  
  this.items.push(x);

  this.length = this.items.length;
  this.items.sort(function (a, b){
    return a - b;
  });

};

SortedList.prototype.get     = function(pos) {
  return this.items[pos - 1];
}

SortedList.prototype.max     = function() {}

SortedList.prototype.min     = function() {}

SortedList.prototype.average = function() {}

SortedList.prototype.sum     = function() {}

module.exports = SortedList;

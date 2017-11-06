function SortedList (){

};

SortedList.prototype= Object.create(Array.prototype);
SortedList.prototype.constructor = SortedList;

SortedList.prototype.add     = function(item) {
   this.push(item);
};

SortedList.prototype.get     = function(pos) {
 return this.sort(function(a,b){return a - b;})[pos-1];
};

SortedList.prototype.max     = function() {
  return Math.max(...this);
};

SortedList.prototype.min     = function() {
  return Math.min(...this);
};

SortedList.prototype.average = function() {
  function getSum(total, num) {
    return total + num;
  }
  if (this.length === 0){return Error;}
  return this.reduce(getSum)/this.length;
};

SortedList.prototype.sum     = function() {
  function getSum(total, num) {
    return total + num;
  }
  if (this.length === 0){return Error;}
  return this.reduce(getSum);
};

module.exports = SortedList;

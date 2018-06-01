var SortedList = function() {
  this.items = [];
  this.length = this.items.length;
};

SortedList.prototype.add = function(item) {
  this.items.push(item);
  this.items = this.items.sort((a, b) => a - b);
  this.length = this.items.length;
}

SortedList.prototype.get     = function(pos) {return this.items[pos-1]}

SortedList.prototype.max     = function() { return Math.max(...this.items)}

SortedList.prototype.min     = function() { return Math.min(...this.items)}

SortedList.prototype.average = function() { 
  if (this.items.length === 0) {return 'EmptySortedList'}
  else { return this.items.reduce( (prev,current)=>{ return prev + current })/this.items.length
  } 
}

SortedList.prototype.sum     = function() {
  if (this.items.length === 0) {return 'EmptySortedList'}
  else {
    return this.items.reduce( (prev,current)=>{ return prev + current })
  }
}

module.exports = SortedList;


sl = new SortedList;

var SortedList = function() {
  this.length=0;
  this.items=[];
};

SortedList.prototype.add     = function(item) {
  if (this.items.length===0) {
    this.items.push(item);
  }
  else {
    var i=0;
    while (item>this.items[i]) {
      i++;
    }
    // console.log(this.items, i);
    this.items.splice(i, 0, item);
    // console.log(this.items, i);
  }
  this.length ++;
};

SortedList.prototype.get     = function(pos) {
  //console.log (this.items[pos-1]);
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
  var temp =0;
  for (var i=0;i<this.length;i++) {
    temp += this.items[i];
  }
  return temp;
};

module.exports = SortedList;

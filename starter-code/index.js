var SortedList = function() {
  this.length = [];
};

SortedList.prototype.add = function(item) {
  this.length.push(item);
  this.length.sort(function(a, b) {
    return a > b;
  });
};

SortedList.prototype.get = function(pos) {
  if (pos - 1 <= this.length.length) {
    return this.length[pos - 1];
  } else {
    return "OutOfBounds";
  }

};

SortedList.prototype.max = function() {
  if (this.length.length===0){
    return 'EmptySortedList';
  }else {
    return this.length[this.length.length-1];
  }

};

SortedList.prototype.min = function() {
  if (this.length.length===0){
    return 'EmptySortedList';
  }else {
    return this.length[0];
  }
};

SortedList.prototype.average = function() {
  if (this.length.length===0){
    return 'EmptySortedList';
  }else {
    let sum=0;
    for (let i=0; i<this.length.length; i++){
      sum+=this.length[i];
    }
    return sum/this.length.length;

  }
};


SortedList.prototype.sum = function() {
  if (this.length.length===0){
    return 'EmptySortedList';
  }else {
    let sum=0;
    for (let i=0; i<this.length.length; i++){
      sum+=this.length[i];
    }
    return sum;

  }

};

module.exports = SortedList;

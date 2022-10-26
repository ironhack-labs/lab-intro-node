class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item)
    this.items.sort((a, b) => a - b);
    this.length+=1
  }

  get(pos) {
    if(pos<this.length && pos>=0){
return this.items[pos]
    }
    else throw new Error('OutOfBounds');
  }

  max() {
    if (!this.length) throw new Error('EmptySortedList');
    return this.items[this.length-1];
  }
  

  min() {
    if (!this.length) throw new Error('EmptySortedList');
    return this.items[0]
  }

  sum() {
     this.sum =this.items.reduce(function(total, current) { 
  return total + current
}, 0)
return this.sum
}

  avg() {
    if (!this.length) throw new Error('EmptySortedList');
    this.sum =this.items.reduce(function(total, current) { 
      return total + current
    }, 0)
    return this.sum/this.length
  }
}

module.exports = SortedList;

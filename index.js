

class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort(function(a,b){
      if (a<=b) {
        return -1
      }else {
        return 1
      }
    });
    this.length = this.items.length;
  }

  get(pos) {
    if (pos >= this.length){
      throw new Error('OutOfBounds');
    } else {
      return this.items[pos];
    }
  }

  max() {
    if(this.length === 0){
      throw new Error('EmptySortedList');
    }else{
      return Math.max(...this.items);
    }

  }

  min() {   
  if(this.length === 0){
    throw new Error('EmptySortedList');
  }else{
    return Math.min(...this.items);
  }
}

  sum() {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    if(this.length === 0){
      return 0;
    }else{
      return this.items.reduce(reducer)
    }
  }

  avg() {
    let average = this.sum() / this.length;
    if(this.length === 0){
      throw new Error('EmptySortedList');
    }else{
      return average;
    }
    

  }
}

module.exports = SortedList;

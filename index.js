class SortedList {
  constructor() {
    this.items = [],
    this.length = 0
  }

  add(item) {
    this.items.push(item);
    this.items.sort(function(a, b){return a-b});
    this.length =+1;
  }

  get(pos) {
    if(this.items.includes(this.items[pos])){
      return this.items[pos]
    } else {
      throw new Error('OutOfBounds')
    }
  }

  max() {
    if (this.length>0) {
      var max = this.items.reduce(function(a, b) {
        return Math.max(a, b);
    });
    return max
    } else {
      throw new Error('EmptySortedList')
    }
  }

  min() {
    if (this.length>0) {
      var min = this.items.reduce(function(a, b) {
        return Math.min(a, b);
    });
    return min
    } else {
      throw new Error('EmptySortedList')
    }
  }

  sum() {
    const sum = this.items.reduce (function (accumulator, currentValue) {
      return accumulator + currentValue
    },0)
    return sum
  }
  avg() {
      if(this.length==0) {
        throw new Error (`EmptySortedList`)
      } else {
        let totalAvg = (this.sum()/this.items.length).toFixed(2);
        return parseFloat(totalAvg)
      }
    }
  }


module.exports = SortedList;

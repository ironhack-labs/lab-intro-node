class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;

  }

  add(item) {
    this.items.push(item)

    this.items.sort(function(a,b) {
      if (a<b) return -1
      if (a>b) return 1
      if (a=b) return 0
      
      

    
  }
    )}

  get(pos) {
    if (pos<=this.items.length) {
      return this.items[pos]

    } else {
      throw new Error('OutOfBounds');
    }
    


  }

  max() {
    if (this.items = [""]) {
      throw new Error('EmptySortedList');
    } else {
      let maxValue = Math.max.apply(null, this.items)
      return maxValue
    }
  }

  min() {
    if (this.items = [""]) {
      throw new Error('EmptySortedList');
    } else {
      let minValue = Math.min.apply(null, this.items)
      return minValue
    }
  }

  sum() {}

  avg() {}
}

module.exports = SortedList;


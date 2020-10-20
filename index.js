class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
      this.items.push(item)
      this.length++ //actualizar el length porque depende de items
      this.items.sort(function(a, b) {
        return a - b;
      });
  }

  get(pos) {
    if(pos>this.length) {
      throw new Error('OutOfBounds');
    } else {
      return this.items[pos];
    }
  }

  max() {
    if(this.length>0) {
      return Math.max.apply(null, this.items);
    } else {
      throw new Error('EmptySortedList');
    }
  }

  min() { 
    if(this.length>0) {
      return Math.min.apply(null, this.items);
    } else {
      throw new Error('EmptySortedList');
  }
}

  sum() {
    var total = 0;
       for (var i = 0; i < this.items.length; i++) {
              total += this.items[i];
            }
       return total;
  }

  avg() {
    return this.items.reduce((a, b) => (a + b)) / this.items.length;
  }
}

module.exports = SortedList;

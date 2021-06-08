class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = "";
  }

  add(item) {
    this.items.push(item);
    this.items.sort(function (a, b) {
      return a - b;
    });
    this.length = this.items.length
  }

  get(pos) {
    if(this.items[pos]){
      return this.items[pos]
    }else{
      throw new Error('OutOfBounds');
    }
  }

  max() {
    if(this.items.length === 0){
      throw new Error ('EmptySortedList')
    } else {
      this.items
      this.items.sort(function (a, b) {
        return a - b;
      });

    }
  }

  min() {}

  sum() {
    this.items.reduce(function (accumulator, currentValue) {
      return accumulator + currentValue;
    });

    if (this.items.add().length < 0) {
      return 0;
    }
  }

  avg() {}
}

module.exports = SortedList;

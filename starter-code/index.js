class SortedList {
  constructor() {
    this.array = []
    this.length = this.array.length

  }
  add(item) {
    this.array.push(item);
    this.length = this.array.length;
    //sorting the array
    if (this.array.length > 1)
      this.array.sort(function (n1, n2) {
        return n1 - n2
      });


  }
  get(pos) {
    //check negative and outobound index
    let index = pos - 1;
    if (index >= this.length || index < 0) {
      let error = new Error('Outofbound');
      return error;
    } else {
      return this.array[index]
    }
  }

  max() {
    if (this.length === 0) {
      let error = new Error('EmptySortedList');
      return error;
    } else {
      return this.array[this.length - 1];
    }
  }

  min() {
    if (this.length === 0) {
      let error = new Error('EmptySortedList');
      return error;
    } else {
      return this.array[0];
    }
  }

  sum() {
    if (this.length === 0) {
      return 0;
    } else {
      return this.array.reduce(function (acc, cur) {
        return acc + cur;
      }, 0);
    }
  }

  average() {
    if (this.length === 0) {
      return 0;
    } else {
      return this.sum() / this.length
    }
  }
};

module.exports = SortedList;

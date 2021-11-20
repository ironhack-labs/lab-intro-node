class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.items.sort(function(a, b) {
      return a - b;
    });
    this.length = this.items.length;
  }

  get(pos) {
    if (this.items[pos]){
      return this.items[pos]
    } else {
      //return 'OutOfBounds'
      throw new CustomException('OutOfBounds');
    }
  }

  max() {
    if(this.length){
      return this.items[this.length -1]
    } else {
      throw new CustomException('EmptySortedList');
    }
  }

  min() {
    if(this.length){
      return this.items[0]
    } else {
      throw new CustomException('EmptySortedList');
    }
  }

  sum() {
    if(this.length){
      let sum = 0;
      this.items.forEach((element) => sum += element)
      return sum
    } else {
      return 0
    }
  }

  avg() {
    if(this.length){
      let sum = 0;
      this.items.forEach((element) => sum += element)
      return sum/this.length
    } else {
      throw new CustomException('EmptySortedList');
    }
  }
}

module.exports = SortedList;

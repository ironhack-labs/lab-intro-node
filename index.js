class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    if(item) {
      this.items.push(item);
      this.length++;
      this.items.sort((a, b) => a - b)
    }    
  }

  get(pos) {
    let posIndex = this.items.indexOf(pos);
    if (posIndex === -1) {
      throw new Error('OutOfBounds');
    } else {
      return posIndex + 1;
    }
  }

  max() {
    if(this.items.length === 0){
      throw new Error('EmptySortedList');
    } else {
      const lastValue = this.items.length - 1
      return this.items[lastValue]
    }
  }

  min() {
    if(this.items.length === 0){
      throw new Error('EmptySortedList');
    } else {
      return this.items[0]
    }
  }

  sum() {
    const initialValue = 0;
    const sum = this.items.reduce(
      (acc, value) => acc + value,
      initialValue
    );

  return sum;
}

  avg() {
    const avgValue = this.sum()/this.items.length

    if(this.items.length === 0){
      throw new Error('EmptySortedList');
    } else {
      return avgValue
    }
  }
}

module.exports = SortedList;

class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.length++
    // let i = ++SortedList.length;
    // this.items[i] = item
    return this.items.sort((a, b) => a - b);
  }

  remove(index) {
    delete this.items[index]
  }

  get(pos) {
    const index = this.items.indexOf(pos);
    if (this.items.indexOf(pos) === -1) {
      throw new Error('OutOfBounds');
    }
    return this.items[index];
  }

  max() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    } 
    return Math.max(...this.items)
  }

  min() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    } 
    return Math.min(...this.items)
  }

  sum() {
    return this.items.reduce((sum, num) => {
      return sum + num
    }, 0)
  }

  avg() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    }
    return this.sum(this.items) / this.length
  }
}

const sortedList = new SortedList()
sortedList.add(5)
//sortedList.remove(0)
console.log(sortedList.items)

module.exports = SortedList;

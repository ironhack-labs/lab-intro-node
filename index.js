class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item);
    ++this.length;
    return this.items.sort((a,b) => a-b);
  }

  remove(index) {
    delete this.items[index]
  }

  get(pos) {
    const index = this.items.indexOf(pos);
    if (this.items.indexOf(pos)=== -1){
      throw new Error('OutOfBounds');
    }
    return this.items[index]

  }
  max() {
    if (this.length === 0){
      throw new Error('EmptySortedList')
    }
    return Math.max(...this.items)
  }

  min() {
    if (this.length === 0){
      throw new Error('EmptySortedList')
    }
    return Math.min(...this.items)
  }

  sum() {}

  avg() {}
}
const sortedList = new SortedList()

module.exports = SortedList;

class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.item.push(item);
    this.item.sort((a,b) => a-b);
    this.length = this.item.length; 
            }

  get(pos) {
    if (pos< this.items.length){
      return this.items[pos];
    } else { throw new Error('Out of bonds') };
  }

  max() {
    if(this.items.length === 0){
      throw new Error('EmptySortedList'); 
    } else {
      return Math.max(...this.items)
    }
  }

  min() {
    if(this.items.length === 0){
      throw new Error('EmptySortedList')
    } else { 
      return Math.min(...this.items)
    }
  }

  sum() {}

  avg() {}
}

module.exports = SortedList;

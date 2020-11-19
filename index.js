class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items = this.items.sort((a, b) => {
    return a - b;
    });
    this.length = this.items.length;
  }

  get(pos) {
    const index = this.items.filter((num, i, arr) => { if (i === pos) return num });
    if (index[0]) {
      console.log("esto", index)
      return index[0]
    } else {
      throw new Error('OutOfBounds');
    }
  }

  max() {}

  min() {}

  sum() {}

  avg() {}
}

module.exports = SortedList;

/*const list = new SortedList;

list.add(2);
console.log(list.get(1))*/


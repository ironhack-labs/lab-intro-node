class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    if (this.length === 0) {
      this.items.push(item);
    } else {
      let inserted = false;
      for (let i = 0; i < this.length; i++) {
        if (item < this.items[i]) {
          this.items.splice(i, 0, item);
          inserted = true;
          break;
        }
      }
      if (!inserted) {
        this.items.push(item);
      }
    }

    this.length = this.items.length;
}


  get(pos) {}

  max() {}

  min() {}

  sum() {}

  avg() {}
}

module.exports = SortedList;

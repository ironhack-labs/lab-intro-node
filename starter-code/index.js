class SortedList {
  constructor() {
    this.item = [];
    this.length = 0;
  }
  add(item) {
    this.length = this.item.push(item);
  }
  get(pos) {
    return this.item[pos];
  }
  max() {
    if(this.length === 0) {
      throw new Error('EmptySortedList');
    }
    return Math.max.apply(null, this.item);
  }
  min() {
    if(this.length === 0) {
      throw new Error('EmptySortedList');
    }
    return Math.min.apply(null, this.item)
  }
  average() {
    if(this.length === 0) {
      throw new Error('EmptySortedList');
    }
    let sumo = 0;
    for (let i = 0; i < this.item.length; i += 1) {
      sumo += this.item[i];
    }
    return sumo/this.length;
  }
  sum() {
    if(this.length === 0) {
      return 0;
    }
    else {
      let sumo = 0;
      for (let i = 0; i < this.item.length; i += 1) {
        sumo += this.item[i];
      }
      return sumo;
    }
  }
};

module.exports = SortedList;

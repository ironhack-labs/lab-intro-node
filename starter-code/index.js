class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.length++;
    this.max();
  }
  get(pos) {
    return this.items[pos-1];
    this.length;
    this.max();
  }
  max() {

    if (this.length === 0) {
      throw new Error("EmptySortedList")
    } else {
      return this.items.sort((a,b) => {
        return a - b 
      })[this.length-1]
    }


  
  }
  min() {

    if (this.length === 0) {
      throw new Error("EmptySortedList")
    } else {
      return this.items.sort((a,b) => {
        return a - b 
      })[0]
    }

  }


  average() {

    if (this.length === 0) {
      throw new Error("EmptySortedList")
    } else {
      return this.sum() / this.length
    }



  }



  sum() {

    if (this.length === 0) {
      return 0
    } else {
      return this.items.reduce((a,b) => {
        return a + b
      })
    }

  }
};

module.exports = SortedList;
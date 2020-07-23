class SortedList {

  //Iteration 1: constructor()
  constructor(items, length) {
    if (typeof items === 'undefined') {
      this.items = [];
      this.length = 0;
    } else {
      this.items = items;
      this.length = length;
    }
  }

  // Iteration 2: add(item)
  add(item) {
    if (typeof item != 'undefined') {
      // if(this.length === 0){
      //   this.items.push(item);
      // }else{

      // }
      this.items.push(item);
      this.items.sort((a, b) => (a - b));
      this.length++;
    }
  }

  // Iteration 3: get(pos)
  get(pos) {
    if (this.items.length === 0 || pos >= this.items.length) {
      throw new Error("OutOfBounds");
    } else {
      const item = this.items.slice(pos, (pos + 1));
      if (typeof item === 'undefined') {
        throw new Error("OutOfBounds");
      } else {
        return item;
      }
    }
  }

  //Iteration 4: max()
  max() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.items.sort((a, b) => (a - b)).slice(this.length - 1);
    }
  }

  // Iteration 5: min()
  min() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return this.items.sort((a, b) => (a - b)).slice(0, 1);
    }
  }

  sum() {
    if (this.items.length === 0) {
      return 0;
    } else {
      return this.items.reduce((sum, item) => {
        return sum + item;
      }, 0);
    }
  }

  avg() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    } else {
      return (this.sum() / this.length);
    }
  }

}

module.exports = SortedList;
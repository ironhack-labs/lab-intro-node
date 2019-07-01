class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b)
    this.length += 1;
  }

  get(pos) {
    return this.items[pos - 1];
  }

  max() {
      if (this.length > 0) {
        return this.items[this.length - 1];
      } else {
        let e = new Error();
        e.message = 'EmptySortedList';
        throw(e);
      }   
  }

  min() {
    if (this.length > 0) {
      return this.items[0];
    } else {
      let e = new Error();
      e.message = 'EmptySortedList';
      throw(e);
    }   
  }

  average() {
    if (this.length > 0) {  
    return this.items.reduce((acc, a) => acc + a / this.length).toFixed(0);
    } else {
      let e = new Error();
      e.message = 'EmptySortedList';
      throw(e);
    }
  }
  
  sum() {
    try {
      return this.items.reduce((acc, a) => acc + a);
    } catch (e) {
      return 0;
    }
    
  }
};

module.exports = SortedList;

let test = new SortedList();
try {
  test.average();
  // The next line should not be executed
  assert.equal(true,false);
} catch (e) {
  console.log(e instanceof Error)
  console.log(e.message)
}
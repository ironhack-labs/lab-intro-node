class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = this.items.length
  }

  add(item) {
    if (item.length === 1 || typeof item === 'number') {
         this.items.push(item);
         this.length = this.length + 1
         this.items.sort(function(a, b){return a-b});
   }  
  }

  get(pos) {
    if (this.length === 0 || pos > this.length) {
      throw new Error("OutOfBounds");
      }
      return this.items[pos]
  }

  max() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    //return Math.max(this.items)  ?????????
    // https://medium.com/@vladbezden/how-to-get-min-or-max-of-an-array-in-javascript-1c264ec6e1aa
    // Math.min or Math.max functions expect distinct variables and not an array
    // The destructuring assignment syntax is a JavaScript expression that makes it possible to extract data from arrays or objects into distinct variables.
    // const nums = [1, 2, 3]
    // Math.min(...nums)    // 1
    // Math.max(...nums)    // 3
    return Math.max(...this.items)
    // return this.items[this.items.length-1] // This will also work
  }

  min() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    return Math.min(...this.items)
  }

  sum() {
    return this.items.reduce(
      (a,b) => {
        return a + b;
      },0);
  }

  avg() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
    }
    return this.sum()/this.length
  }
}

module.exports = SortedList;

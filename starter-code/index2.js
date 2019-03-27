class SortedList {
    constructor() {
      this.items = []
      this.length = this.items.length
    }
    add(item) {
      this.items = [...this.items, item]
      this.items.sort((a,b)=> a-b)
      this.length = this.items.length
    }
    get(pos) {
      pos--    
      try {
        return this.items.length  ? this.items[pos] : (void 0).throwError()
      }
      catch(e) {
        throw new Error('OutOfBounds')
      }
    }
    max() {
      try {
        return this.items.length  ? Math.max(...this.items) : (void 0).throwError()
      }
      catch(e) {
        throw new Error('EmptySortedList')
      }
    }
    min() {
      try {
        return this.items.length  ? Math.min(...this.items) : (void 0).throwError()
      }
      catch(e) {
        throw new Error('EmptySortedList')
      }
    }
    average() {
      try {
        return   this.items.length
               ? this.items.reduce((t, n)=> (t + n))/this.items.length
               : (void 0).throwError()
      }
      catch(e) {
        throw new Error('EmptySortedList')
      }
    }
    sum() {
      return this.items.length ? this.items.reduce((t, n)=> (t + n)) : 0
    }
  };
  
  module.exports = SortedList;
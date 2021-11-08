const chalk = require('chalk')

class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length
  }

  add(item) {
    this.items.push (item)
    this.items.sort ((a, b)=>{
      if (a < b){
        return -1
      }
    })
  }

  get(pos) {}

  max() {}

  min() {}

  sum() {}

  avg() {}
}

const sortedList = new SortedList()
module.exports = SortedList;

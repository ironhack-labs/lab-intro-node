class SortedList {
  constructor() {
    this.items = []
    this.length = 0
  }

  add(item) {
    this.items.push(item);
    this.length ++;
    this.items.sort((a,b) => {
      if(a>b) {
        return 1
      }
      else if (b>a) {
        return -1
      }
      else {
        return 0
      }
    })
  }

  get(pos) {
     if (pos>this.length){
      throw new Error('OutOfBounds');
     }
     return this.items[pos]
  }

  max() {}

  min() {}

  sum() {}

  avg() {}
}

module.exports = SortedList;

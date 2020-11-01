class SortedList {
  constructor() {
    this.items = [],
    this. length = this.items.length;

  }

  add(item) {
    this.items.push(item)
    this. length = this.items.length
    this.items.sort((a, b)=>{return a-b});
  }

// In addition, make sure you throw an error with the message OutOfBounds if a user tries to get an element in the non-existing position (e.g. if the array has 5 elements and we are trying to get the element on the position 7).
  get(pos) {
    let res = this.items.indexOf(pos)
    // console.log(res);
    if (res === -1) {
      res = 'OutOfBounds'
    }
    // else {
    //   res = this.items.indexOf(pos)
    //
    // }
    return res

  }

  max() {}

  min() {}

  sum() {}

  avg() {}
}

module.exports = SortedList;

let list = new SortedList;
list.add(1)
list.add(2)
list.add(3)

console.log(list.get(7));

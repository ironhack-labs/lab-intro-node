class SortedList {
  constructor(items, length) {
this.items = [];
this.length = this.items.length;

  }

  add(item) {
    this.items.push(item);
    this.items.sort((el1,el2) => {
      return el1 - el2;
    })

    this.length = this.items.length;

  }

  get(pos) {
    if(this.items[pos] === undefined) {
      throw Error ('OutOfBounds');
    } return this.items[pos];
  }

  max() {
    if(this.items.length == 0) {
      throw Error ('EmptySortedList')
    } else {return Math.max(...this.items) 
    }
  }

  min() {
    if(this.items.length == 0) {
      throw Error ('EmptySortedList')
    } else {
      return Math.min(...this.items)
    }

  }

  sum() {
    return this.items.reduce((el1, el2) => el1 + el2, 0);

  }

  avg() {
    if(this.items.length == 0){
      throw new Error('EmptySortedList');
    }
    return (this.sum() / this.items.length);
    }
  }


module.exports = SortedList;

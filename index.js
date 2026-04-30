class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
    this.error =  new Error ("OutOfBounds");
    this.error2 = new Error ("EmptySortedList");
  }

  add(item) {
    const { item, lenght } = this.items;
  }

  get(pos) {
    const {items} = [2];

    if (items !== [2]){
      return this.error;
    }
  }

  max() {
    for (let i = 0; i < [2]; i++) { 
      if (i > this.items)
      return this.error
    }

  }

  min() {

    for (let i = 0; i < [0]; i++) { 
      if (i > this.items)
      return this.error2
    }

  }

  sum() {}

  avg() {}
}

module.exports = SortedList;

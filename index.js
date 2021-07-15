class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }


  add(item) {

    let addItem = 0;
    let complete = false;


    for (let i = 0; i < this.length; i++) {
      if (item <= this.items[i]) {
        this.items.splice(addItem, 0, item);
        this.length = this.items.length;
        complete = true;
        break;
      }
    }

    if (complete == false) {
      this.items.push(item);
      this.length = this.items.length;

    }
  }



  // let it = this.items

  // item.sort((a,b) => {
  //   if(a > b){
  //     return 1
  //   }
  //   if(a < b) {
  //     return -1}
  //   }) 

  //   it += item
  // }

  get(pos) {

    if (pos >= this.length) {
      throw new Error('OutOfBounds');
    } else {
      let itemsI = this.items[pos];
      return itemsI
    }
  }

  max() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    }
    let max = Math.max(...this.items);
    return max;
  }

  min() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    }
    let min = Math.min(...this.items);
    return min;
  }

  sum() { }

  avg() { }
}

module.exports = SortedList;

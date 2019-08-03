class SortedList {
    constructor() {
      this.items = [];
      this.length = this.items.length;
    }
    add(item) {
      this.items.push(item);
      this.length = this.items.length;
    }
    get(pos) {
      if (pos > this.length){
        console.log('The selected position does not exist');
      } else {
      return this.items[pos];
      }
    }
    max() {}
    min() {}
    average() {}
    sum() {}
  };

  let list = new SortedList();
  list.add('x');
  list.add('20')
  let gotten = list.get(0);
  console.log(gotten);
  console.log(list);
  
  module.exports = SortedList;
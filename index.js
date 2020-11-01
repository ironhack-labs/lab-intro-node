class SortedList {
  constructor() {
    this.items = [],
    this.length = 0;

  }
//The add(item) method should add the value item to the items array, ensuring that the items array stays sorted in ascending order. What does this mean? Well, if an array of items has these elements: [2, 5, 7], and if 6 is added, the array of items should be as follows: [2, 5, 6, 7].

//Here you should also make sure that the length property gets updated accordingly when new items are added to the list.


  add(item) {
    this.items.push(item)
    this. length = this.items.length
    console.log();
    this.items.sort((a, b)=>{return a-b});
  }

  get(pos) {}

  max() {}

  min() {}

  sum() {}

  avg() {}
}

module.exports = SortedList;

let list = new SortedList;
list.add(1)
list.add(1)
list.add(1)
console.log(list.length);

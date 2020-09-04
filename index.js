class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
    }
// function sortList(arr, item){
//   arr = this.items;
//   this.items.sort(function(a, b){
//     return a - b;
//   });
// return sortList();
// }



  


// let sortArray = item;

// sortArray.sort((a, b) => {
//   if(a - b){
//     sortArray.push(this.items)
//   }
// })

    // var numbers = [4, 2, 5, 1, 3];
    // numbers.sort(function(a, b) {
    //   return a - b;
    // });
    // console.log(numbers);

  

  get(pos) {
    if(pos !== this.items[pos]){
      throw new Error('OutOfBounds');
    }
    return this.items[pos];
  }

  max() {
    if(this.items.length === 0){
      throw new Error('EmptySortedList');
    }
    return Math.max(...this.items);
  }

  min() {
    if(this.items.length === 0){
      throw new Error('EmptySortedList');
    }
    return Math.min(...this.items);
  }

  sum() {
    // if(this.items.length === 0){
    //   throw new Error(0);
    // }
    let total = this.items.reduce((a, b) => a + b, 0);
    return total;
  }

  avg() {
    let total = this.items.reduce((a, b) => a + b);
    return total / this.items.length;
  }
}

module.exports = SortedList;

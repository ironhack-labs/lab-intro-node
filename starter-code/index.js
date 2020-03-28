class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => {

     if(a > b){
       return 1
     } if (a < b){
       return -1
     } else {
       return 0
     }
    })

    this.length = this.items.length;    
  }

  get(pos) {
    if(this.items[pos] == null){
      throw new Error("OutOfBounds");
    } else{
      return this.items[pos];
    }
    
  }

  max() {
    if(this.items.length == 0){
       throw new Error("EmptySortedList");
    } else {
      return Math.max(...this.items);
    }
  }

  min() {
    if(this.items.length == 0){
      throw new Error("EmptySortedList");
   } else {
     return Math.min(...this.items);
   }
  }

  sum() {
    if(this.items.length == 0){
      return 0
    } else {
    let sum = this.items.reduce((sum, value) => {sum += value; return sum});
    return sum;
    }
  }

  avg() {
    if(this.length == 0){
      throw new Error("EmptySortedList");
    } else {
      let sum = this.items.reduce((sum, value) => {sum += value; return sum});

      return sum/this.length;
    }
    
  }
}

module.exports = SortedList;

// let list = new SortedList();
// list.add(2);
// list.add(1);
// console.log(list);

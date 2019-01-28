class SortedList {
  constructor() {
    this.items = []
    this.length = 0
  }
  add(item) {
    this.items.push(item)
    this.items.sort(function(a , b){
      if (a > b) return 1;
      else if (a < b) return -1
    })
    this.length = this.items.length
  }
  get(pos) {
    return this.items[pos-1]
  }

  max() {
    if (this.items.length === 0 ) {
      throw new Error ("EmptySortedList") ;
    }
    var sortedArray = this.items.sort(function(a,b){
      if (a < b) return 1
      else if (a > b) return -1 ;
    })
  return sortedArray[0]
}
  min() {
    if (this.items.length === 0 ) {
      throw new Error ("EmptySortedList") ;
    }
    var sortedArray = this.items.sort(function(a,b){
      if (a > b) return 1
      else if (a < b) return -1 ;
    })
  return sortedArray[0]
  }
  average() {
    if (this.items.length === 0 ) {
      throw new Error ("EmptySortedList") ;
    }
    var res = this.items.reduce(function(acc,value) {
      return acc + value;
    }, 0)
    return res / this.items.length;
  }
  sum() {
      var res = this.items.reduce(function(acc,value) {
        return acc + value;
      }, 0)
      return res;
    }
};

module.exports = SortedList;


// var sl = new SortedList()
// sl.add(10)
// sl.add(20)
// console.log(sl.max())
// var foo = 10;

// for(i=1; i<200; i++) {
//   sl.add(foo*i);
//   console.log(sl.item[i])
// //  sl.get(i)
// }

class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length
  }


  add(item) {
    this.length++
    this.items.push(item)
    this.items.sort(function(a, b){
      return a - b
    })
  }
  get(pos) {}
  max() {}
  min() {}
  average() {}
  sum() {}
};


module.exports = SortedList;





class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }
  add(item) {
    this.items.push(item)
    this.length++
    this.items.sort(function(a, b){
      return a - b
    })
  }
  get(pos) {
    return pos = this.items[pos - 1]
  }
  max() {
    if(this.items.length === 0){
      throw new Error("EmptySortedList")
    } else{
      return this.items = Math.max(...this.items)
    }
    
  }
  min() {
    if(this.items.length === 0){
      throw new Error("EmptySortedList")
    } else{
      return this.item = Math.min(...this.items)
    }
  }
  average() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList")
    } else{
      var tot = 0;
      for (var index = 0; index < this.items.length; index++) {
        tot += this.items[index];
        var avg = tot / this.items.length
        return avg
      }
      
    }
  }

  sum() {
    if(this.items.length === 0){
      return 0
    } else{
      return this.items.reduce((a, b) => a + b)
    }
  }
};

var sl = new SortedList();


module.exports = SortedList;

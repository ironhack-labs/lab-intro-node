class SortedList {
  constructor() { // el consturctor, no recibe variables
    this.items = [];
    this.length = this.items.length
    // no hace falta new SortedList
    
  }

  add(item) {
    this.items.push(item);
    this.items.sort(
      function(a, b) {
        return a-b
      });
    this.length = this.items.length
  }

  get(pos) {
    if (pos < this.length ){
      return this.items[pos]
    } else {
      throw new Error('OutOfBounds');
    }
  }

  max() {
    if(this.length > 1){
      return Math.max(...this.items)
    } else { 
      throw new Error('EmptySortedList')
    }
  }

  min() {
    if(this.length > 1){
      return Math.min(...this.items)
    } else { 
      throw new Error('EmptySortedList')
    }

  }

  sum() {

    var sum = this.items.reduce(function(a, b){
      return a + b;
  }, 0);
    return sum
  }

  avg() {
    var total = 0;
    if (this.items.length>0) {
    for(var i = 0; i < this.items.length; i++) {
    total += this.items[i];
    }
      var avg = total / this.items.length;
      return avg
  } else {
    throw new Error('EmptySortedList')

  }}
}

module.exports = SortedList;

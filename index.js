class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item)
    this.items.sort(function(a,b){
      return a-b
    })
    
  }

  get(pos) {
    if(pos >= this.items.length){
      throw new Error('OutOfBounds')
    } else {
    return this.items.indexOf(pos)
    }
  }

  max() {
    if (this.items.length === 0){
      throw new Error('EmptySortedList');
    } else{
     const maxValue = this.items.reduce(
       function(acc,e){
         acc = Math.max(acc,e)
         return acc
       })
    return maxValue
    }
  }


  min() {
      if (this.items.length === 0) {
        throw new Error('EmptySortedList');
      } else {
        const minValue = this.items.reduce(
          function(acc, e){
          acc = Math.min(acc, e);
          return acc;
        });
        return minValue;
      }
  }

  sum() {
    if (this.items.length === 0) {
    return 0;
    } else {
    let sum = this.items.reduce(
      function(acc,e){
        return acc+e
      },0)} return sum
  }





  avg() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    }
  }
}


module.exports = SortedList;

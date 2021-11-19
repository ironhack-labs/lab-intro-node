class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item)
    this.items = this.items.sort((a,b)=>a-b)
    this.length = this.items.length;
  }

  get(pos) {
    if(pos > this.items.length-1){
      throw new Error('OutOfBounds');
    } else {
      return this.items[pos]
    }
  }

  max() {
    let number = this.items[0];
    if(!this.items.length){
      throw new Error('EmptySortedList');
    } else {
      this.items.forEach((item)=>{
        if(number < item){
          number = item
        }
      })
    }
    return number
  }

  min() {
    let number = this.items[0];
    if(!this.items.length){
      throw new Error('EmptySortedList');
    } else {
      this.items.forEach((item)=>{
        if(number > item){
          number = item
        }
      })
    }
    return number
  }

  sum() {
    let total;
    if(!this.items.length){
      return 0
    } else {
          total = this.items.reduce((acc,curr)=>{
      return acc + curr
    })
    }
    return total
  }

  avg() {
    let total;
    if(!this.items.length){
      throw new Error('EmptySortedList');
    } else {
        total = this.items.reduce((acc,curr)=>{
      return acc + curr
    })
    }
    return total / this.items.length
  }
}


module.exports = SortedList;

class SortedList {
  constructor(items,length) {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item).sort((a,b)=>{
      return a-b
    });
    this.length++;
  }

  get(pos) {
    if(pos > this.length -1){
      throw new Error("OutOfBounds")
    } else {
      return this.items[pos];
    }
  }

  max() {
    if(this.length == 0){
      throw new Error('EmptySortedList')
    } else {
      return Math.max(...this.items)
    }

  }

  min() {
    if(this.length == 0){
      throw new Error('EmptySortedList')
    } else {
      return Math.min(...this.items)
    }
  }

  sum() {
    if(this.length == 0){
      throw new Error('EmptySortedList')
    } else {
      this.items.reduce((acc,next)=>{
        acc+next
      })
    }
  }

  avg() {
  return this.sum()/this.length;
  }
}

module.exports = SortedList;

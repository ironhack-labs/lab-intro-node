class SortedList {
  constructor() {
    this.items = []
    this.length = 0
  }

  add(item) {
    
    this.items.push(item)
     this.length++
    this.items = this.items.sort((a,b) => a-b)
    
    return this.items
  };

  get(pos) {
     if(this.items[pos]) {
       return this.items[pos];
     } else {
      throw new Error('OutOfBounds');
     }
};

  max() {
    const max = Math.max( ...this.items );
    if(this.items.length == 0) {
      throw new Error('EmptySortedList');
    } else {
      return max
    }

   
  }

  min() {
    const min = Math.min( ...this.items );
    if(this.items.length == 0) {
      throw new Error('EmptySortedList');
    } else {
      return min
    }
  
  }

  sum() {
    return this.items.reduce((acc,val) => {return acc+val},0)
  }

  avg() {
    if(this.length == 0) {throw new Error('EmptySortedList')}
    return this.items.reduce((acc,val) => {return acc+val}) / this.length
  }
}

module.exports = SortedList;

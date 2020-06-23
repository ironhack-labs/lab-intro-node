// let sortedList=new SortedList(); 


class SortedList {
  constructor() {
      this.items=[]; 
      this.length=this.items.length; 
  }
    
  add(item) {
      this.items.push(item); 
      this.items.sort(function(a,b) { return a-b}); 
      this.length=this.items.length; 
  }
      
  get(pos) {
      if (pos > this.items.length - 1) {
        throw new Error('OutOfBounds'); 
      } 
        return this.items[pos]
  }

  max() {
    if (this.items.length == 0) {
      throw new Error('EmptySortedList');
    }
    return Math.max(...this.items); 
  }

  min() {
    if (this.items.length == 0) {
      throw new Error('EmptySortedList');
    }
    return Math.min(...this.items);
  }

  sum() {
    var sum = this.items.reduce (function(a,b) {
      return a+b; 
    }, 0); return sum;  
  }

  avg() {
    var avg = (this.items/this.items.length)*this.items.length; 
    return avg; 
  }
}

module.exports = SortedList;

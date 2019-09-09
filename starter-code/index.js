class SortedList {
    constructor(items,lenght) {
      this.items=[]
      this.length = 0;
    }
    add(item) {
      this.items.push(item)
      this.items.sort((a, b) => a - b)
      this.length = this.items.length;
    }
    get(pos) {
      return this.items[pos]
    }
    max() {
      var max=this.items[0]
      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i]>max){
          max = this.items[i]
        }
          
      }

      if(this.items.length==0)
        {throw new Error("EmptySortedList")}
      return max
    }
    min() {
      var min = this.items[0]
      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i] < min) {
          min = this.items[i]
        }

      }

      if (this.items.length == 0) { throw new Error("EmptySortedList") }
      return min
    }
    average() {
      if (this.items.length == 0) { throw new Error("EmptySortedList") }
      return this.sum()/this.items.length
    }
    sum() {
      if (this.items.length == 0) { return 0 }
      
      return this.items.reduce((acc, i) => acc + i, 0);
    }
  };
  
  module.exports = SortedList;
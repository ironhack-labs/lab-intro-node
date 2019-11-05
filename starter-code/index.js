class SortedList {
    constructor() {
      this.items=[]
      this.length=0
    }
    add(item) {
      this.items.push(item)
      this.items = this.items.sort((a, b) => a-b)
      this.length ++
    }
    get(pos) {
      return this.items[pos]
    }
    max() {
      let mx=0
      if(this.length!==0)
      {
        this.items.forEach(element => {
          if(element>mx)
            mx=element
        });
        return mx
      }
      else throw new Error("EmptySortedList")
    }
    min() {
      if(this.length!==0)
      {
        let mn=this.items[0]
        this.items.forEach(element => {
          if(element<mn)
            mn=element
        });
        return mn
      }
      else throw new Error("EmptySortedList")
    }
    average() {
      if(this.length!==0)
      {
        let sum=0
        this.items.forEach(element => sum+=element);
        return sum/this.length
      }
      else throw new Error("EmptySortedList")
    }
    sum() {
      return this.items.reduce(function(sum, elem){
        sum+=elem 
        return sum}
        ,0)
    }
  };
  
  module.exports = SortedList;
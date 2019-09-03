class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

sort(a,b){
return a-b;
}

  add(item) {
    this.items.push(item)
    this.items.sort(this.sort)
    this.length=this.items.length

  }
  get(pos) {
    return this.items[pos];
  }
  max() {
    if(this.length<=0){
      throw new Error("EmptySortedList")
    }else{
    return Math.max(...this.items);
    }

    // try {
    //   return Math.max(this.items);
    // } catch (this.items<=0) {
    //   throw new Error("EmptySortedList")
    // }
  }
  min() {
    if(this.length<=0){
      throw new Error("EmptySortedList")
    }else{
    return Math.min(...this.items);
    }
  }
  
  sum() {
    return this.items.reduce(function(acc, value)
    {return acc+value
    },0)
}
average() {
  if(this.length<=0){
    throw new Error("EmptySortedList")
  }else{
 return this.sum()/this.length
  }
}
}

module.exports = SortedList;

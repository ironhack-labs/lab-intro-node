class SortedList {
  constructor() 
  {
    this.items=[];
    this.length=this.items.length;
  }

  add(item) 
  {this.items.push(item)
  this.length=this.items.length
  this.items.sort((a,b)=>a-b)
}

  get(pos) 
  {return this.items[pos-1]}

  max() {
    if(!this.items.length) throw new Error("EmptySortedList")
    return this.items[this.items.length-1]
  }
  min() {
    if(!this.items.length) throw new Error("EmptySortedList")
    return this.items[0]
  }
  average() { 
    if(!this.items.length) throw new Error("EmptySortedList")
    
    return this.items.reduce((a, b) => a + b)/this.items.length

  }
  sum() {
    
    if(!this.items.length) return 0
    return this.items.reduce((a, b) => a + b)
  }
};



module.exports = SortedList;


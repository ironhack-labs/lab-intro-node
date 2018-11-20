class SortedList {
  constructor() {
    this.items=[]
    this.length=this.items.length;
  }

  add(item) {
  
  this.length ++
  this.items.push(item)
  this.items.sort(function(a, b) {
    return a - b
  }
    )
  }


  get(pos) {
    if (pos < 1 || pos > this.items.length){
      return new Error("OutOfBounds")
    } else {
    return this.items[pos - 1]
  }}



  
  max() {
    if ( this.length === 0 ){
      throw new Error("EmptySortedList")
    } 
      return this.items[this.length - 1]

  }
  min() {
    if ( this.length === 0 ){
      throw new Error("EmptySortedList")
    } return this.items[0]

  }
  average() {
    if (this.length === 0) {
      throw new Error("EmptySortedList")
    }


  return this.items.reduce((a, b) => a + b, 0) / this.length

  }
  sum() {
    {
      return this.length === 0 ? this.length : this.items.reduce((a, b) => a + b, 0)
    }
    

  }
};

module.exports = SortedList;

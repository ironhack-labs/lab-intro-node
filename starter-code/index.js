class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item)
    this.items.sort((a,b) => a-b )
    this.length = this.items.length
  }
  get(pos) {
    return this.items[pos-1]
  }
  max() {

    if( this.length == 0) {

      throw new Error("EmptySortedList")

    } else {

      let maxNumber = 0
      
      
      this.items.forEach((elm) => elm>maxNumber ? maxNumber = elm : null
        
      )

      return maxNumber
    }
  }
  min() {

    if( this.length == 0) {

      throw new Error("EmptySortedList")

    } else {

      return  Math.min(...this.items)

    
    }

  }
  average() {
    if (this.length==0) {
      throw new Error("EmptySortedList")

    } else {
    return this.sum(this.items)/this.length
   }
  }
  sum() {
    if (this.length==0) {
      return 0
    } else {
      return (this.items.reduce((a,b)=> a+b))      
    }
  }
};

module.exports = SortedList;

class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item)

    this.items.sort((a,b)=>a-b)
    this.length=this.items.length
  }

  get(pos) {

    if (this.items.indexOf(pos) === -1) {
        throw new Error('OutOfBounds');
    }

    return this.items[pos]

}


  max() {
    if(this.length>0){
      return Math.max(...this.items)
    }
   else {throw new Error('EmptySortedList');}
  }

  min() {
    if(this.items.length>0){
      return Math.min(...this.items)
    }
   else {throw new Error('EmptySortedList');}
  }

  sum() {
    if(this.items.length>0){
      return this.items.reduce((sum,cv)=>sum+cv)
    }
   else {return 0}
    
  }

  avg() {
    if(this.items.length>0){
      return this.sum()/this.length
    }
   else {throw new Error('EmptySortedList');}
    
  }
}

module.exports = SortedList;

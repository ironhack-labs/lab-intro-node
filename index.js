class SortedList {
  constructor() {

    this.items = []
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item)
    this.items.sort((compare)=>{return a - b})
   this.length = this.items.length
  }

  get(pos) {
    const position = this.items[pos]
    if (!this.length) {
      throw new Error('OutOfBounds')
    }

    return  position
  }


  max() {
    if(this.items.length === 0){
      throw new Error('EmptySortedList');
    }
    const lastNumber = this.items.length -1 
    return  this.items[lastNumber]
  }

  min() {
    if(this.items.length === 0){
      throw new Error('EmptySortedList');
    }
    return this.items[0]

  }

  sum() {}

  avg() {}
}

const list = new SortedList ("list1")




module.exports = SortedList;

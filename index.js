class SortedList {
  constructor() {
    this.items = [],
    this.length = this.items.length
  }

  add(item) {
   this.items.push(item)
   this.length++
   this.items.sort((a,b) => {
     if (a>b){
       return 1;
     } 
     else if (a<b){
       return -1;
     }
     else{
       return 0;
     }
   })
 
  }

  get(pos) {
    if (pos< this.items.length && pos >= 0){
      return this.items[pos]
    }else {
      throw new Error('OutOfBounds');
    }
  }

  max() {
    if (this.items.length !== 0){
      return this.items[this.items.length - 1]
    } else {
      throw new Error('EmptySortedList');
    }
  }

  min() {
    if (this.items.length !== 0){
      return this.items[0]
    } else {
      throw new Error('EmptySortedList');
    }
  }

  sum() {
    let sumArr = this.items.reduce((a,b) => {
      return a+b
    },0)
    return sumArr
  }

  avg() {
    if (this.items.length > 0){
      return ((sumArr/this.items.length))
    }
    else{
      throw new Error('EmptySortedList');
    }
  }
}

module.exports = SortedList;

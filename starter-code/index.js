class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length
  }
  add(item) {
    this.length++
    this.items.push(item)
    return this.items
  }

  get(pos) {
    return this.items[pos-1]
  }

  max(){
    if(this.length === 0){
      throw new Error("EmptySortedList")   
     } else {
      return this.items[this.length-1]
    }
  }
  min() {
    if(this.length === 0){
      throw new Error("EmptySortedList")
        } else {
      return this.items[0]
    }
  }
  average() {
    if(this.length === 0){
      throw new Error("EmptySortedList")
    } else {
      return this.sum()/this.length
    }
  }
  sum() {
    var suma = 0
    if(this.length === 0){
      throw new Error("EmptySortedList")
    } else {
      this.items.forEach((element)=>{
        suma += element
      })
      return suma
    }
  }
};

module.exports = SortedList;

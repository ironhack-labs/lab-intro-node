class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length
  }
  add(item) {
    this.length++
    this.items.push(item)
    return this.items.sort((a,b)=>{
      return a-b
    })
  }
  get(pos) {
    //console.log(this.items[pos-1])
     return this.items[pos -1]
  }

  max() {
    if(this.length === 0){
      throw new Error("EmptySortedList")
    }
      return this.items[this.length-1]
  }

  min() {
    if(this.length === 0){
      throw new Error("EmptySortedList")
    }
      return this.items[0]
  }
  
  average() {
    if(this.length === 0){
      throw new Error("EmptySortedList")
    }
      return this.items/[this.length]
  }

  sum() {
    var suma = 0

    if(this.length === 0){
      return 0
    }else {
      this.items.forEach(function(element) {
        suma += element
     
       });
       return suma
    }
      
  }
};

module.exports = SortedList;

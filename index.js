class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length 
  }

  add(item) {
    this.items.push(item)
    this.length = this.items.length 
    this.items.sort((a,b)=>{
      return a-b
    })
  
  }

  get(pos) {

    
    if (pos > this.items.length ){
      throw new Error("OutOfBounds"); 
    
    }
    else {
      return this.items[pos]
    }
  }

  max() {
    if (this.items.length === 0){
      throw new Error("EmptySortedList");
    }

    else{
      return (this.items[this.items.length -1])
    }
  }

  min() {
    if (this.items.length === 0){
      throw new Error("EmptySortedList");
    }

    else{
      return (this.items[0])
    }
  }

  sum() {
      let total = 0;
      this.items.forEach((element) => {
        total += element  
      });
      return total
      
    }
  

  avg() {
    let total = 0;
    this.items.forEach((element) => {
      total += element  
    });
    let average = total / this.items.length
  

    if (this.items.length === 0){
      throw new Error("EmptySortedList");
    }
    return average

  }
}

module.exports = SortedList;

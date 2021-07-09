class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item)
    this.items.sort((a,b)=> a-b)
    this.length = this.items.length
  }
  get(pos) {
    if(this.items[pos]){
      return this.items[pos]
    }else{
      throw new Error('OutOfBounds');
    }
  }
  max() {
    if(!this.items[0]){
      throw new Error('EmptySortedList');
      
      
    }else{
      return this.items[this.items.length - 1]
      
      
    }
  }

  min() {
    if(!this.items[0]){
      throw new Error('EmptySortedList');
      
      
    }else{
      return this.items[0]
      
      
    }
  }

  sum(){
    if(!this.items[0]){
    return 0
    }else{
    let sum = this.items.reduce((acc,item)=>{acc+=item
    return acc},0)
    
    return sum 
    }
  }

  avg() {
    if(!this.items[0]){
      throw new Error('EmptySortedList');
      }else{
      let avg = this.items.reduce((acc,item)=>{acc+=item
      return acc},0)/this.items.length
      
      return avg
      }
  }
}

module.exports = SortedList;



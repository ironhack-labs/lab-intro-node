class SortedList {
  constructor() {

    this.items = []
    this.length=this.items.length

  }
    
  add(item) {

    this.items.push(item)
    this.items.sort((a, b) => a - b);
    this.length = this.items.length

  }

  get(pos) {

    if(pos<this.items.length){
      return this.items[pos]
    }
    else{
      throw new Error('OutOfBounds'); 
    }

  }

  max() {

    if(this.length>0){
      return Math.max(...this.items)
    }
    else{
      throw new Error('EmptySortedList');
    }

  }

  min() {

    if(this.length>0){
      return Math.min(...this.items)
    }
    else{
      throw new Error('EmptySortedList');
    }

  }

  sum() {

    let sum=0
    if(this.length===0){
      return sum 
    }
    else{
      for (let i=0; i<this.length;i++){
        sum+= this.items[i]
      }
      return sum
    }

  }

  avg() {

    if(this.length>0){
      return this.sum()/this.length
    }
    else{
      throw new Error('EmptySortedList');
    }

  }
}

module.exports = SortedList;

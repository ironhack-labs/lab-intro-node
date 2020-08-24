class SortedList {
  constructor(items, length){
    this.items=[]
    this.length=this.items.length
  }
  add(item){
    while(this.items.sort()){
      this.items.push(item)
    }
  }
  get(pos){
    if(pos>this.items.length){
      throw new Error('OutOfBounds');
    }
    return this.items[pos]
  }
  max(){
    if(!this.items.length){
      throw new Error('EmptySortedList')
    }

    return Math.max.apply(null, this.items)
  }
  min(){
    if(!this.items.length){
      throw new Error('EmptySortedList')
    }

    return Math.min.apply(null, this.items)
  }
  sum(){
    let total=0;
    for(let i=0; i<this.items.length; i++){
      total += this.items[i]
    }
    return total;
  }
  avg(){
    if(!this.items.length){
      throw new Error('EmptySortedList')
    }

    let total=0;
    for(let i=0; i<this.items.length; i++){
      total += this.items[i]
    }
    let avg=total/this.items.length;
    return avg
  }
}

module.exports = SortedList;


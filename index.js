class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    let i = 0
    while(i<this.items.length && this.items[i]<item){
      i++;
    }
    this.items.splice(i,0, item);
    this.length = this.items.length;
  }

  get(pos) {
    if(this.items.length<pos){throw new Error('OutOfBounds')}
    else {return this.items[pos]}
  }

  max() {
    if(this.items.length===0){throw new Error('EmptySortedList')}
    else{return Math.max(...this.items)}
    //this.items[this.items.length-1]
  }

  min() {
    if(this.items.length===0){throw new Error('EmptySortedList')}
    else{return Math.min(...this.items)}

  }

  sum() {
    if(this.items.length===0){return 0 }
    else{
      let sum=0;
      for(let el of this.items){
        sum+=el;
      }
      return sum
    }
  }

  avg() {
    if(this.items.length===0){throw new Error('EmptySortedList')}
    else{
      let sum=0;
      for(let el of this.items){
        sum+=el;
      }
      return sum/this.items.length  
    }
  }
}

module.exports = SortedList;

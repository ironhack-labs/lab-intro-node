class SortedList {
  constructor() {
    this.items=[];
    this.length=0;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a,b)=>{return a-b;});
    this.length=this.items.length;
  }

  get(pos) {
    if (pos>this.items.length-1){
      throw new Error('OutOfBounds');
    } else {
      return this.items[pos];
    }
    
  }

  max() {
    if (this.items.length===0){
      throw new Error('EmptySortedList');
    } else {
      return Math.max(...this.items);
    }
  }

  min() {
    if (this.items.length===0){
      throw new Error('EmptySortedList');
    } else {
      return Math.min(...this.items);
    }
  }

  sum() {
    if (this.items.length===0){
      return 0;
    } else{
      return this.items.reduce((acc,red)=>red+acc)

    }
  }

  avg() {
    if (this.items.length===0){
      throw new Error('EmptySortedList');
    } else {
      // console.log(this.items.sum())
      // console.log(this.items.length)
      // console.log(this.items.sum()/this.items.length)

      return this.sum()/this.length;
    }
  }
}

module.exports = SortedList;

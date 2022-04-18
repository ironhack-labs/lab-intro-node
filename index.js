class SortedList {
  constructor() {
    this.items=[];
    this.length=0;
  }

  add(item) {
    this.items.push(item)
    this.items.sort(function(a, b){return a - b});
    this.length=this.items.length;
  }
    

  get(pos) {
    if(!this.items[pos]){
      throw new Error('OutOfBounds');
    }
    return this.items[pos]
  }

  max() {
    if(this.items.length<=0){
      throw new Error('EmptySortedList');
    }
    const maxNum = Math.max.apply(null,this.items);
    return maxNum;
  }

  min() {
    if(this.items.length<=0){
      throw new Error('EmptySortedList');
    }
    const minNum=Math.min.apply(null,this.items);
    return minNum;
  }

  sum() {
    let initValue=0
    const sum = this.items.reduce((prevValue,currValue)=>prevValue+currValue,initValue);
    return sum;
  }

  avg() {
    if(this.items.length<=0){
      throw new Error('EmptySortedList');
    }
    let initValue=0
    const avg = this.items.reduce((prevValue,currValue)=>prevValue+currValue,initValue)/this.items.length;
    return avg;
  }
}

module.exports = SortedList;

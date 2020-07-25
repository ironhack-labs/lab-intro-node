class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort(function(a,b){return a-b});
    this.length = this.items.length;
  }

  get(pos) {
    if(pos>this.items.length){
      throw new Error('OutOfBounds');
    }else{
      return this.items[pos];
    }
  }

  max() {
    if(this.length === 0){
      throw new Error('EmptySortedList');
    }else{
      let highest = 0;
      this.items.forEach(ele =>{
        if(ele>highest){
          highest = ele;
        }
      })
      return highest;
    }
  }

  min() {
    if(this.length === 0){
      throw new Error('EmptySortedList');
    }else{
      let lowest = 1000000;
      this.items.forEach(ele =>{
        if(ele<lowest){
          lowest = ele;
        }
      })
      return lowest;
    }
  }

  sum() {
    if(this.length === 0){
      return 0;
    }else{
      let reducer = (accumulator, currentValue) => accumulator + currentValue;
      return this.items.reduce(reducer) 
    }
  }

  avg() {
    if(this.length === 0){
      throw new Error('EmptySortedList');
    }else{
      let reducer = (accumulator, currentValue) => accumulator + currentValue;
      return this.items.reduce(reducer)/this.length 
    }
  }

  
}

module.exports = SortedList;

class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
   
    this.items.push(item);
    this.items.sort((a,b) => a-b);
  
    this.length = this.items.length;
  }

  get(pos) {
    
    for(let i =0;i<this.length;i++) {
      if(i === pos) {
        return this.items[i]
      }
      else if(pos > this.items.length -1){
              throw new Error("OutOfBounds");
        }
    }
  }

  max() {
    if(this.length === 0){
      throw new Error("EmptySortedList");
    }
    else{
      const crescentArr = this.items.sort((a,b) => a-b);
      return crescentArr.splice(this.length-1,1);

    }

  }

  min() {
    if(this.length === 0){
      throw new Error("EmptySortedList");
    }
    else{
      const crescentArr = this.items.sort((a,b) => b-a);
      return crescentArr.splice(this.length-1,1);

    }

  }

  sum() {
    if(this.length=== 0) {
    return 0}
    else  {
      return this.items.reduce((acc,number)=> {return acc + number},0)
    }

  }

  avg() {
    if(this.length === 0){
      throw new Error("EmptySortedList");
    }
    else{
      const sum = this.items.reduce((acc,number)=> {return acc + number},0);
      return sum/this.length;
    }  
  }
}


module.exports = SortedList;

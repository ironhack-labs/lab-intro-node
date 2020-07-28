class SortedList {
  constructor(){
    this.items = [];
    this.length = this.items.length;
  }


  add(item) {
    this.items.push(item);
    this.items.sort((a,b)=>{
      return a-b
    })
    return this.length ++
  }

  get(pos) {
    if(pos<= this.items.length){
      return this.items[pos]
    }
    else {
      throw new Error('OutOfBounds');
    }
  }

  max() {
    if(this.items.length > 0){
      let lastIndex = this.items.length;
   return this.items[lastIndex-1];
    }
    else{
      throw new Error('EmptySortedList');
    }
  }

  min() {
    if(this.items.length !== 0){
    return this.items[0];
  }
    else {
    throw new Error('EmptySortedList');
  }
}

  sum() {
    if(this.items.length == 0){
      return 0
    }
    else {
      let sum = 0;
        for(let i=0;i<this.items.length;i++){
          sum +=this.items[i]
        }
        return sum;
    }
  }

  avg() {
    if(this.items.length == 0){
      throw new Error('EmptySortedList'); 
    }
    else {
      return (this.sum()/this.items.length)
    }
  }
}

module.exports = SortedList;

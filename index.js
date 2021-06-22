class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }
  add(item) {
    let chosenI = 0;
    let complete = false;

    for (let i = 0; i < this.length; i++ ){
      if (item <= this.items[i]){
        chosenI = i;
        this.items.splice(chosenI, 0, item);
        this.length = this.items.length;
        complete = true;
        break;
      }
      }
    if (complete == false){
      this.items.push(item);
      this.length = this.items.length;
    }
    
    
  }

  get(pos) {
    if (pos >= this.length){
      throw new Error('OutOfBounds');
    }else{
      let chosen = this.items[pos];
      return chosen;
    }}

  max() {
    if (this.items.length === 0){
      throw new Error('EmptySortedList');
    }
    let x = Math.max(...this.items);
    return x;
  }

  min() {
    if (this.items.length === 0){
      throw new Error('EmptySortedList');
    }
    let x = Math.min(...this.items);
    return x;
  }

  sum() {
   let fsum =  this.items.reduce((a, b) => a + b, 0)
   return fsum;
  }

  avg() {
    let faverage;
    let fsum =  this.items.reduce((a, b) => a + b, 0)
    if (fsum === 0){
      throw new Error('EmptySortedList');
    }
    else{
     faverage = fsum/this.length;
     return faverage;
    }
  }
}

module.exports = SortedList;

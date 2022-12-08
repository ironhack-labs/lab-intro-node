class SortedList {
  constructor(items, length) {

    this.items = [];
    this.length = 0;

  }

  add(item) {
    this.items.push(item)
    this.items.sort((a, b)=> a - b);
    this.length = this.items.length
   
  }
//had help with this one
  get(pos) {
    if(this.items[pos]){
    return this.items[pos]
  }else{

    throw new Error('OutOfBounds');
  }

}
  //had help here too

  max() {
    if(this.length > 0){
    return Math.max(...this.items)
    }else{
    throw new Error('EmptySortedList');
  }
}

  min() {
    if(this.length > 0){
      return Math.min(...this.items)
      }else{
      throw new Error('EmptySortedList');
    }
  }

  sum() {
    
}
  

  avg() {}
}

module.exports = SortedList;

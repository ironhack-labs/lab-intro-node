class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items = this.items.sort((a, b) => a-b)
    this.length = this.items.length;
  }

  get(pos) {
    if(this.items[pos]){
      return this.items[pos];
    }else{
      throw new Error('Out of Bounds');
    }
  }

  max() {
    if(this.items.length === 0){
      throw new Error('Empty Sorted List');
    }else return this.items[this.items.length - 1];
  }

  min() {
    if(this.items.length ===0 ){
      throw new Error('Empty Sorted List');
    }else{
      return this.items[0];
    }
  }

  sum() {
    return this.items.reduce((a, b =>{
      return a + b;
    }, 0))
  }

  avg() {
    if(this.items.length === 0){
      throw new Error('Empty Sorted List');
    }else{
      return(this.sum() / this.length);
    }
  }
}

module.exports = SortedList;

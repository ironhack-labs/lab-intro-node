class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.items = this.items.sort((a,b)=> a-b);
    this.length++;
  }

  get(pos) {
    const item = this.items.indexOf(pos)
    if(pos > this.length){
      throw new Error('OutOfBounds');
    }else{
    return item
    }
  }

  max() {
    const itemsO =this.items = this.items.sort((a,b)=> a-b);
    
    if(this.items.length === 0){
      throw new Error('EmptySortedList');
    }else{
      return itemsO.slice(-1).pop()
    }
  }

  min() {
    const itemsO =this.items = this.items.sort((a,b)=> a-b);
    
    if(this.items.length === 0){
      throw new Error('EmptySortedList');
    }else{
      return itemsO[0]
    }
  }

  sum() {
   const total = this.items.reduce((total,item) => total + item, 0)
   return total
  }

  avg() {
    const total = this.items.reduce((total,item) => total + item, 0)
    if(this.items.length === 0){
      throw new Error('EmptySortedList');
    }else{
      return total/this.length
    }
  }
}

module.exports = SortedList;

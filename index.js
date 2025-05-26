class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length
  }

  add(item) {
    
    this.items.push(item);
    this.items.sort((a, b) => a - b)
    this.length = this.items.length
    return this.items;
  }

  get(pos) {
    if(pos > this.length - 1){
      throw new Error("OutOfBounds")
    }else{

      return this.items[pos]
    }
  }

  max() {
    if(this.length == 0){
      throw new Error("EmptySortedList");
    }else{
      return Math.max(...this.items);
    }
  }

  min() {
    if(this.length == 0){
      throw new Error("EmptySortedList");

    }else{
      let minValue = this.items[0];
      for(let i=0; i < this.length; i++){
        if(minValue > this.items[i]){
          minValue = this.items[i];
        }

      }
      return minValue;
    }
  }

  sum() {
    if(this.length == 0){
      return 0
    }else{
    const sumOfItems = this.items.reduce((acc, item)=>{

      return acc + item;
    })
    return sumOfItems;}
  }

  avg() {
    if(this.length === 0){
      throw new Error("EmptySortedList");
    }else{
      return this.sum()/this.length
    }
  }
}
const newSort = new SortedList()
newSort.add(12);
newSort.add(2);
newSort.add(6);
console.log(newSort.add(1));
console.log(newSort.min());
module.exports = SortedList;

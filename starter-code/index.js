class SortedList {
  constructor() {

    this._items = [];
    this.length = 0;

  }

  get items(){
    return this._items;
  }

  set items(value){
    this._items = value;
    this.length = this._items.length;
  }

  add(item) {

    if(this.length === 0){
      this.items.push(item);
      this.length++;
      return
    }


    let indexOfInsertion = 0;
    this.items.forEach( element => {
      if(element<item){indexOfInsertion++;}
    });

    this.items.splice(indexOfInsertion, 0, item);
    this.length++;
  }


  get(pos) {
    if(pos === 0){
      throw new Error("OutOfBounds");
    }
      return this._items[pos-1];
  }


  max() {
    if(this.length === 0){
      throw new Error("EmptySortedList");
    }
    return this.get(this.length);
  }
  min() {
    if(this.length === 0){
      throw new Error("EmptySortedList");
    }
    return this.get(1);
  }


  sum() {
    return this._items.reduce((accumulator, currentValue) =>{
      return accumulator + currentValue
    }, 0)
  }

  average() {
    if(this.length === 0){
      throw new Error("EmptySortedList");
    }
    return this.sum()/this.length
  }
}



module.exports = SortedList;

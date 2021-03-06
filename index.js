class SortedList {

  //this.items = [];

  constructor(){
    this.items = [];
    this.length = this.items.length;
  }

  add(item){
    this.items.unshift(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }

  get(pos){
    if(pos > 0 && pos < this.length){
      return this.items[pos];
    }
    throw new Error("OutOfBounds");
  }

  max(){
    if(this.length > 0){
      return this.items[this.length - 1];
    }
    throw new Error("Empty");
  }

  min(){
    if (this.length > 0){
      return this.items[0];
    }
    throw new Error("Empty");
  }

  sum(){

  }

  avg() {

  }
}

module.exports = SortedList;
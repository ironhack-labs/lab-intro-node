class SortedList {
  //The task here is to create a class that maintains a sorted list of numbers in ascending order.
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    //you should also make sure that the length property gets updated accordingly when new items are added to the list.
    this.items.sort((a,b) => a - b); 
    this.items.push(item);
    this.items.sort((a,b) => a - b); 
    this.length = this.items.length;

    //¿A qué se refieren con "should add a value while keeping the list sorted ?????"
    //También tengo que aprender jeroglíficos además de Javascript? 
    //if(notclearinstructions){frustration++;}
    //En serio, parece que lo ha escrito un indio navajo (nada contra los indios navajos, Dios los bendiga)
    //¡Viva el pueblo navajo! 
  }

  get(pos) {
    if (pos > this.length){
      throw new Error("OutOfBounds");
    }else{
      return this.items[pos]
    }
  }

  max() {
    if(this.length === 0){
      throw new Error("EmptySortedList");
    }
    else{
      return this.items[this.items.length-1]
    }
  }

  min() {
    if(this.length === 0){
      throw new Error("EmptySortedList");
    }
    else{
      return this.items[0]
    }
  }

  sum() {
    if(this.length === 0){
      return 0
    }else{
      let total = items.reduce((sum, elem) => sum + elem)
      //Non capito
    }
  }

  avg() {
    if(this.length === 0){
      throw new Error("EmptySortedList");
    }else{
      let avg = this.sum/this.length;
      return avg
    }
  }
}

module.exports = SortedList;

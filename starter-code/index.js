class SortedList {
  
  constructor() {
    this.items= []
    this.length = [0]
  }
  add (item) {
    //pushing unique values into array
    this.items.push = (item)
    //The method will get the nth value in the list.
    this.items.sort((a,b)=> a-b);
    this.length = this.items.length;

  }
  
  get (pos) {
    //array is empty// lenght property 
    if (this.length === 0){
      throw new Error("OutOfBounds");
    }
      return this.items[pos];
        
    }
     
  max () {
    if (this.items.length === 0){
     throw new Error("EmptySortedList");
    }
  //return the highest value of the array.
    return Math.max(...this.items)
  }

  min(){
    if (this.items.length === 0){
      throw new Error("EmptySortedList");
    }
//return the lowest  value of the array.
    
      return Math.min(...this.items)
    }

  average () {
    if (this.items.length === 0){

    throw new Error("EmptySortedList");
  }
  return this.sum()/this.length

}

sum () {
  //return the sum value of the array
  return this.items.reduce((a,b)=>a+b);

}

};

module.exports = SortedList;

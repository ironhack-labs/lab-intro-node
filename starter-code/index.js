class SortedList {
  constructor() {

    this.items = [];
    this.length = this.items.length;

  }
  add(item) {

    this.items.push(item);
    this.items.sort();
    this.length=this.items.length;
  
    }

 
    get(pos) {
 
      if(!this.items[pos-1]){
        throw new Error('OutOfBounds');
      }else{
          return this.items[pos-1];
      }
     }
    
  max() {

    if(this.length ===0){
      throw new Error('EmptySortedList');
      }
      else{
       return Math.max(...this.items);
      }
    }

  min(){
   
    if(this.length ===0){
    throw new Error('EmptySortedList');
    }
    else{
     return Math.min(...this.items);
    }
  }

  average() {

    if(this.items.length ===0){
      throw new Error('EmptySortedList');
    }
else{

  let total = this.sum();

   return total/this.length;

}
  }

  sum() {

    let sum =0;

    if(this.items.length ===0){
      return sum;
    }

else{
    for (let i = 0; i < this.items.length; i++) {
      sum += this.items[i]

    }
    return sum;
  }
  }

}

module.exports = SortedList;

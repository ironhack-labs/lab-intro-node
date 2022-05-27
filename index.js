class SortedList {
  constructor() {
    this.items=[];
    this.length=this.items.length

  }

  add(item) {
    this.items.push(item)

    this.items.sort(function(a,b){

    return a-b

    })

    this.length =this.items.length
      
  }

  get(pos) {

    if(pos < 0 || pos > this.items.length){
      throw new Error('OutOfBounds');
    }  

    else{
      this.items[pos]
    }
  }

  max() {

    if(this.items.length === 0){
      throw new Error('EmptySortedList');
    }
    else{
      return Math.max(...this.items);
    }
    

  }

  min() {

    if(this.items.length === 0){
      throw new Error('EmptySortedList');
    }
    else{
      return Math.min(...this.items)
    }

  }

  sum() {
    let sum=0;

    if (this.items.length === 0){
      return 0;
    }
    else{
      for(let i =0; i < this.items.length; i++){
        sum += this.items[i]
      }
      
    }
    return sum 
  }

  avg() {
   

    if (this.items.length === 0){
      throw new Error('EmptySortedList');
    }
    else {
      return this.sum()/ this.length
      }
      
    }
    
}

module.exports = SortedList;

class SortedList {
  constructor(items , length) {
   
    this.items = []
    this.length =this.items.length
  }

  add(item) {
    this.items.push(item)
   
    this.items.sort(function(a, b){return a-b});

  }

  get(pos) {
    if (pos < 0 || pos > this.items.length -1 ){
      throw new Error ("OutOfBounds")
    }else {
      return this.items[pos]
    }
    
    
    

  }

  max() {
    if(this.items.length == 0 ){
       throw new Error("EmptySortedList");
    }else{
      return this.items[this.items.length -1]
  }

  }

  min() {
    if(this.items.length == 0 ){
      throw new Error("EmptySortedList");
  }else {
    return this.items[0]
  }
}

  sum() {
    if(this.items.length == 0 ){
      return 0 ; 
      
  }else { 
    this.items.reduce((a, b) => a + b, 0)
  }
}

  avg() {
    let sum = 0;
    for (let i = 0; i < this.items.length; i++){
        sum +=  this.items[i]
    }
    return sum / this.items.length;

  }


module.exports = SortedList;

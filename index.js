class SortedList {
 
  constructor() {
      this.items = [];
      this.length= this.items.length;

  }

  add(item) {
   
  this.items.push(item);
  this.items.sort(function(a,b){
    return a-b
  })
  this.length= this.items.length
  }

  get(pos) {
    //if(!this.items.includes)
    if(pos > this.length){
      throw new Error('OutOfBounds');
    }else{
      return this.items[pos];
    };
    
    }


  max() {
    
      if(this.items.length == 0){
        throw new Error('EmptySortedList');
      }else{
        return this.items[this.items.length-1];
      }
  }

  min() {

    if(this.items.length == 0){
      throw new Error('EmptySortedList');
    }else{
      return this.items[0];
    }

  }

  sum() {
    var sumTotal=0;
    for(var i=0; i< this.items.length; i++){
      if(this.items.length == 0){
        return 0;
      }
      sumTotal += this.items[i]
    }
    return sumTotal;
  }

  avg() {
    if(this.items.length == 0){
      throw new Error('EmptySortedList');
}
return this.sum()/this.items.length;
}
}

module.exports = SortedList;

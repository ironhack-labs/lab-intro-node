class SortedList {
  constructor(){
    this.items = [];
    this.length = 0;
  }

  add(item){
    this.items.push(item);
    this.items.sort(function (a, b){
      return a - b;
  });
    this.length++;
  }

  get(pos){
    if(this.length< pos){
      throw new Error('OutOfBounds');
    }else{
      return this.items[pos];
    }
  }

  max(){
    if(this.length === 0){
      throw new Error('EmptySortedList');
    }else{
      return Math.max.apply(null, this.items);
    }
  }

  min(){
    if(this.length === 0){
      throw new Error('EmptySortedList');
    }else{
      return Math.min.apply(null, this.items);
    }
  }

  sum(){
    let total=0;
    let numeros = this.items;
    for(let i of numeros){
      total+=i;
    }
    if(this.length === 0){
      return 0;
    }
    return total;
  }

  avg(){
    if(this.length === 0){
      throw new Error('EmptySortedList');
    }
    var sum = this.items.reduce(function(acumulator, nextValue){
      acumulator += nextValue;
    }, 0);
    return sum / this.length;
    
  }
}


module.exports = SortedList;

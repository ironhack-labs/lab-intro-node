class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length
  }

  add(item) {
      this.items.push(item)
      this.length +=1
      this.items=this.items.sort(function(a,b){
        return  a-b
      });
  }

  get(pos) {
    if(pos>this.items.length){
      throw new Error('OutOfBounds');
    }

    return this.items[pos]
    
  }

  max() {
    if(this.length === 0 ){
      throw new Error('EmptySortedList');
    }
    return Math.max.apply(null, this.items);
  }

  min() {
    if(this.items.length === 0){
      throw new Error('EmptySortedList')
    }

    return Math.min.apply(null, this.items)
  }

  sum() {
    
    let suma=0;
    for(let i=0; i<this.items.length; i++){
      suma += this.items[i]
    }
    return suma;
  }

  avg() {
    if(this.items.length === 0){
      throw new Error('EmptySortedList')
    }
    let suma=0;
    for(let i=0; i<this.items.length; i++){
      suma += this.items[i]
    }
    let promedio=suma/this.items.length;
    return promedio
  }
}

module.exports = SortedList;

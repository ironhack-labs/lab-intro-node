class SortedList {
  constructor() {
    this.items=[];
    this.length=this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a,b)=>a-b);
    this.length=this.items.length;
  }

  get(pos) {    
    if((pos<0)||(pos>this.items.length)){
      throw new Error('OutOfBounds');
    }
    return this.items[pos];
  }

  max() {
    if(this.items.length==0){
      throw new Error('EmptySortedList');
    }
    return Math.max(...this.items);
  }

  min() {
    if(this.items.length==0){
      throw new Error('EmptySortedList');
    }
    return Math.min(...this.items);
  }

  sum() {
/*     4) should return the sum of all elements in the list
    5) should return 0 for an empty sorted list */
    if(this.items.length==0){
      return 0;
    }else {
      //let sum=this.items.forEach(el=>el+el); 
      return this.items.reduce((a, b) => a + b, 0);//sum of all elements in the list;
    }
  }      

  avg() {
/*     6) should return an EmptySortedList exception if there are no elements
    7) should return the average of elements in the list */
    if(this.items.length==0){
      throw new Error('EmptySortedList');
    }
    return this.sum(this.items)/this.items.length;
  }
}

module.exports = SortedList;
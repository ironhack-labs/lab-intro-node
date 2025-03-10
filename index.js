class SortedList {
  constructor() {
    this.items=[];
    this.length=this.items.length;
  }

  add(item) {
    if(this.items.length===0){
      this.items.push(item);
    }else{
      let index=this.items.findIndex(element=>element>item);
    if(index===-1){
      this.items.push(item);
    }
  else{
      this.items.splice(index,0,item);
    }
  }
  this.length=this.items.length;
  }

  get(pos) {
    if(pos<0 || pos>=this.length){
      throw new Error("OutofBounds");
    }
    return this.items[pos];
  }

  max() {
    if(this.length===0){
      throw new Error("EmptySortedList");
    }
    return this.items[this.items.length-1];
  }

  min() {
    if(this.length===0){
      throw new Error("EmptySortedList");
    }
    return this.items[0];
  }

  sum() {
    /*if(this.length===0){
      throw new Error("EmptySortedList");
    }*/
    return this.items.reduce((acc,num)=>acc+num,0);
  }

  avg() {
    if(this.items.length===0){
      throw new Error("EmptySortedList");
    }
    return this.sum()/this.length;  
  }
}

module.exports = SortedList;

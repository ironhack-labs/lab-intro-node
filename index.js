class SortedList {
  constructor() {
    this.items=[]
    this.length=this.items.length
  }

  add(item) {

    this.items.push(item)
    this.length=this.items.length
    this.items.sort((a,b)=>{
      return a-b
    })

  }

  get(pos) {
    if (pos>this.items.length){
      throw new Error('OutOfBounds');
    }
    return this.items[pos]
  }

  max() {
    let mayor=0
    if(this.items.length==0){
      throw new Error('EmptySortedList');
    }
    for(let i =0;i<this.items.length-1;i++){
      if(this.items[i]>this.items[i+1]){
        mayor=this.items[i]
      } else {
        mayor=this.items[i+1]
      }
    }
    return mayor   
  }

  min() {
    let menor=10;
    if(this.items.length==0){
      throw new Error('EmptySortedList');
    }
    for(let i =0; i<this.items.length-1;i++){
      if(this.items[i]<this.items[i+1]){
        menor=this.items[i];
      } else{
        menor=this.items[i+1];
      }
    }
      return menor;
  }

  sum() {
    if(this.items.length==0){
      return [];
    }
   const suma= this.items.reduce((ac,av)=>{
      return ac+av
    },0);
    return suma
  }

  avg() {
    if(this.items.length==0){
      throw new Error('EmptySortedList');
    }
    let ssum=this.sum(this.items);
    let avg=ssum/this.items.length
    return avg
  }
}

module.exports = SortedList;

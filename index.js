class SortedList {
  constructor(items,length) {
    this.items=[];
    this.length= this.items.length;
  }

  add(item) {
    this.item=item;
    this.items.push(item);
    this.length +=1;
    this.items.sort((a,b)=>{a-b});
  }

  get(pos) {
    if (pos>=this.items.length) 
    {throw new Error('OutOfBounds')}
    else {return this.items[pos]}
  }

  max() {
    if (this.items=[])
    {throw new Error('EmptySortedList')}
    else {
      let max = this.items.get(0);

      for (let i = 1; i < this.items.length; i++) {
          if (this.items.get(i) > max) {
            max = this.items.get(i);
          }
      }
      //return Math.max.apply(null, this.items)
      };
    }
  

  min() {
    if (this.items=[])
    {throw new Error('EmptySortedList')}
    else {return Math.min.apply(null, this.items)
      };
      
  }

  sum() {
  /*this.summ =0;
  if (this.items=[]) {return 0;
  } else{
  for (let i=0; i<this.items.length; i++){
    summ += this.items[i]
  return this.summ}
  }*/
  }
  avg() {}
}

module.exports = SortedList;

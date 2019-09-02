class SortedList {
  constructor(item, length) {
    this.item = [];
    this.length = this.item.length;
  }

  add(x) {
    this.item.push(x);
    this.item.sort((a, b) => {
      if(a>b){
        return 1;
      }else if(a<b){
        return -1;
      }else{
        return 0;
      }
    });
    this.length = this.item.length;
  }

  get(pos) {
    if(pos<=this.item.length){
      return this.item[pos];
    }
  }
  
  max() {
    let max=-Infinity;
    if(this.item.length!==0){
      for(let i=0;i<this.item.length;i++){
        if(this.item[i]>max?max=this.item[i]:max);
      }
      return max;
    }else{
      throw new Error("EmptySortedList");
    }
  }

  min() {
    let min=+Infinity;
    if(this.item.length!==0){
      for(let i=0;i<this.item.length;i++){
        if(this.item[i]<min?min=this.item[i]:min);
      }
      return min;
    }else{
      throw new Error("EmptySortedList");
    }
  }
  
average() {
  let avg = 0; 
  let sum = 0;
  if(this.item.length!==0){
    for (let i = 0; i < this.item.length; i++) {
      sum+=this.item[i];
    }
    avg = sum / this.item.length;
    return avg;
  }else{
    throw new Error("EmptySortedList");
  }
}

sum() {
  let sum=0;
    if(this.item.length!==0){
      for(let i=0;i<this.item.length;i++){
        sum+=this.item[i];
      }
      return sum;
    }else{
      return 0;
    }
  }
}
module.exports = SortedList;


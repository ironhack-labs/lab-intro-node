class SortedList {
    constructor() {
      {
        this.items = [],
        this.length = this.items.length;
      }
    }
    add(item) {
      
      this.items.push(item);
      this.items.sort((a,b)=>{
        return a - b;
      });
      this.length +=1;
      
    }
    get(pos) {
      if(pos > this.length){
        return 'OutOfBounds';
      }
      let position = this.items[pos];
      return position;
    }
    max() {
      if(this.length == 0){
        throw new Error('EmptySortedList');
      }
      let max = this.items.reduce((a,b)=>{
        return Math.max(a, b);
      })

      return max;
    }
    min() {
      if(this.length == 0){
        throw new Error('EmptySortedList');
      }
      let min = this.items.reduce((a,b)=>{
        return Math.min(a, b);
      })
      return min;
    }
    average() {
      if(this.items.length === 0){
        throw new Error('EmptySortedList');
      }
      let average = this.items.reduce((acumulador,atual)=>{
        return acumulador + atual;
      })

      return average / this.items.length
    }
    sum() {
      if(this.items.length === 0){
        return 0;
      }
      let sum = this.items.reduce((acumulador,atual)=>{
        return acumulador + atual;
      })
      return sum;
    }
  };
  
  module.exports = SortedList;
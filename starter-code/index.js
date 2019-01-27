class SortedList {
  constructor() {
    this.items=[];
    this.length=0;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a,b) => a-b);
    this.length++;
  }

  get(pos) {
    if ((pos <= 0) || (pos > this.length)){
      throw new Error("OutOfBounds")
    }else{
      return this.items[(pos-1)];
    }
  }

  max() {
    if (this.length === 0){
      throw new Error("EmptySortedList")
    }else{
      //Calculo el maximo usando Array.reduce()
      // let max = this.items.reduce(function(max, current) {
      //     return Math.max(max, current);
      // });
      // return max;

      //Calculo el máximo usando spre operator
      return Math.max(...this.items);
    }
  }

  min() {
    if (this.length === 0){
      throw new Error("EmptySortedList");
    }else{
      //Calculo el maximo usando Array.reduce()
      return this.items.reduce(function(min, current) {
          return Math.min(min, current);
      });

      //Calculo el máximo usando spre operator
      //return Math.min(...this.items);
    }
  }

  sum() {
    if (this.length === 0){
      return 0;
    }else{
      return this.items.reduce( (sum, element) => sum + element);
    }
  }

  average() {
    if (this.length === 0){
      throw new Error("EmptySortedList");
    }else{
      return (this.items.reduce( (sum, element) => sum + element)) / this.length;
    }
  }
};

module.exports = SortedList;

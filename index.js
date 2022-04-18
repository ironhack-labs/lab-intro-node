class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;

  }

  add(item) {
    this.items.push(item);
    this.items.sort((a,b) => {return a-b});

    this.length = this.items.length;
  }

  get(pos) {
    if(!this.items[pos]){
      throw new Error("OutOfBounds");
    }
    return this.items[pos]
  }

  max() {
    if(this.items.length == 0){
      throw new Error("EmptySortedList")
    }
    return this.items.pop();
  }

  min() {
    if (this.items.length == 0){
      throw new Error("EmptySortedList")
    }
    return this.items.shift();
  }

  sum() {
    let aggregateSum = 0;
    this.items.forEach((element)=>{
      aggregateSum += element
    });

    return aggregateSum
  }

  avg() {
    if(this.items.length ==0){
      throw new Error("EmptySortedList")
    }
    let aggregateSum = 0;
    this.items.forEach((element) => {
      aggregateSum += element
    });

    return aggregateSum/this.items.length
  }
}

module.exports = SortedList;

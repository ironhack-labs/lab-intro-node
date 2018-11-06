class SortedList {
  constructor() {
    this.items  = [];
    this.length = 0;
  }
  add(x){
    this.items.push(x);
    this.length++;
  }

  get(x){
    if(this.items.length=== 0){
      throw new Error("EmptySortedList")}
    if(x > this.length){
      throw new Error("OutOfBounds")}
    return this.items[x];
}

  max(items){
    if(this.items.length=== 0){
      throw new Error("EmptySortedList")
    }
    return Math.max(...items);
  }

  min(items){
    if(this.items.length=== 0){
      throw new Error("EmptySortedList");
    }
    return Math.min(...items);
  }

  sum(items){
    this.items.reduce(acc, curr)
      return acc + curr;
    }


    average(){
      sum(this.items)/this.items.length;
    }

};

module.exports = SortedList;

let newList = new SortedList();
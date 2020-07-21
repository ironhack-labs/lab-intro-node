class SortedList {
constructor() {
  this.items = [];
  this.length = this.items.length;
}
add(item) {
  
  this.items.push(item);
  this.length++;

  this.items.sort((a,b)=>{return a-b});
}

get(pos){
  if (this.items.length === 0 || pos > this.length) {
    throw new Error("OutOfBounds");
  }
  let positionValue = this.items[pos];
  return positionValue;
  
}

max() {

  if (this.length == 0) {
    throw new Error("EmptySortedList");
  } else {
    let max = Math.max(...this.items);
    return max;
  }

}
min() {

  if (this.length == 0) {
    throw new Error("EmptySortedList");
  } else {
    return Math.min(...this.items);
  }
}
  sum() {
    if (this.length == 0) {
      return 0
    } else {
     let reducer = (acc, cv) => acc + cv;
     return this.items.reduce(reducer);
  }
  }

  avg() {
    if (this.length == 0) {
      throw new Error("EmptySortedList");
    } else {
    let avgArr = this.sum()/this.items.length;
    return avgArr;
  }

  }


}
module.exports = SortedList;

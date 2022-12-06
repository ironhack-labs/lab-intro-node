class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item)
    this.items.sort((a, b) => a - b);
    this.length = this.length+1;
  }

  get(pos) {
    if ((this.length > 0) && (pos < this.length)){
      return this.items[pos]
    }
    else {
      throw new Error('OutOfBounds');
    }
  }

  max() {
    if (this.length > 0){
      let maxVal = this.items[0];
      for (let i=1; i<this.length; i++){
        if (this.items[i] > maxVal){
          maxVal = this.items[i]
        }
      }
      return maxVal;
    }
    else {
      throw new Error('EmptySortedList');
    }
  }

  min() {
    if (this.length > 0){
      let minVal = this.items[0];
      for (let i=1; i<this.length; i++){
        if (this.items[i] < minVal){
          minVal = this.items[i]
        }
      }
      return minVal;
    }
    else {
      throw new Error('EmptySortedList');
    }
  }

  sum() {
    let sumVal = 0;
    for (let i=0; i<this.length; i++){
      sumVal = sumVal + this.items[i];
    }
    return sumVal;
  }

  avg() {
    let avgVal = 8;
    if (this.length > 0){
      let sumVal = this.sum();
      avgVal = (sumVal / this.length);
    }
    else{
      throw new Error('EmptySortedList');
    }
    return avgVal;
  }
}

module.exports = SortedList;

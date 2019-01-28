class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length
  }
  add(item) {
    var arr = this.items;

    if(typeof(item) == "number"){
        arr.push(item);
    }
    else if(typeof(item) == "object"){
        item.forEach(function(oneItem){
            arr.push(oneItem);
        });
    }

    arr = arr.sort(function(a, b){
        if(a < b){
            return -1;
        }
        else if(a > b){
            return 1;
        }
        else{
            return 0;
        }
    });
    this.items = arr;
    this.length = arr.length;
    // console.log(this.items);
    return this.items;
  }
  get(pos) {
    return this.items[pos-1];
  }
  max() {
    if (this.items.length !== 0)
    return this.items[this.items.length - 1]
    throw new Error("EmptySortedList");
  }
  min() {
    if (this.items.length !== 0)
    return this.items[0]
    throw new Error("EmptySortedList");
  }
  average() {
    var sum = 0;
    var average = 0;
    var arr = this.items;
    arr.forEach(function(oneItem){
        sum += oneItem;
    });
    average = sum/(this.length);
    // console.log(average);
    if (this.items.length !== 0)
    return average;
    throw new Error("EmptySortedList");
  }
  sum() {
    var sum = 0;
    var arr = this.items;
    arr.forEach(function(oneItem){
        sum += oneItem;
    });
    // console.log(sum);
    return sum;
  }
};

module.exports = SortedList;

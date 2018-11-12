class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = 0;
  }
  add(item) {
    this.items.push(item);
  }
  get(pos) {

    return this.items[pos-1];

  }
  max() {
    
    if (this.items.length <= 0){
      throw new Error("EmptySortedList");
    }else{
      var max = Math.max(...this.items);
      return max;
    }


  }
  min() {
    if(this.items.length <= 0){
      throw new Error("EmptySortedList");
    }else{
      var min = Math.min(...this.items);
      return min
    }
  }
  average() {
    if (this.items.length <= 0){
      throw new Error("EmptySortedList");
    }else{
    
      let ave = this.sum() / this.items.length;
      return ave
    }

    
  }
  sum() {

    if (this.items.length === 0){
      return 0;
    }else{
      return this.items.reduce(function (ac,cu){
          return ac+cu;
      },0)
    }
  }
};

module.exports = SortedList;



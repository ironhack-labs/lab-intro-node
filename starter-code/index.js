class SortedList {
  constructor() {
    this.items=[];
    this.length=0;
  }
  add(x) {
    this.items.push(x)
    this.items.sort(function(a,b){
      return a-b
    });
    this.length++;
  }
  get(pos) {

    return this.items[pos-1];
  }
  max() {
      if(this.items.length===0){
   
      throw new Error("EmptySortedList")
    } else {
      return this.items[this.items.length-1]
    }
  }

  min() {
    if(this.items.length===0){
   
      throw new Error("EmptySortedList")
    } else {
      return this.items[0]
    }

  }
  average() {
    if( this.length>0){
      var total=this.items.reduce(function(a, b){ return a + b; },0);
      return total/this.items.length;
    } else {
      throw new Error("EmptySortedList")
    }

  }
  sum() {
    if( this.length>0){
      var total=this.items.reduce(function(a, b){ return a + b; },0);
      return total
    } else {
      return 0
    }
    
  }
};

module.exports = SortedList;

var sortedList1 = new SortedList();

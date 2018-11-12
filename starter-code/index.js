class SortedList {
  constructor() {
    this.items =[];
    this.length = this.items.length;
  }
  add(item) {
    this.items.push(item);
    this.length++;
    this.sortList();
  }
  get(pos) {
      return this.items[pos-1];
  }
  max() {
    if(this.items.length <=0){
      throw new Error("EmptySortedList");
    }else{
      return  Math.max(...this.items);
    }
  }
  min() {
    if(this.items.length <=0){
      throw new Error("EmptySortedList");
    }else{
      return  Math.min(...this.items);
    }

  }
  average() {
    if(this.items.length<=0){
      throw new Error("EmptySortedList");
    }
    return this.sum()/this.items.length;
  }
  sum() {
    if(this.items <= 0){
      return 0;
    }else{
      var result =0;
    result = this.items.reduce(function(acumulator,current){
        return acumulator +current;
    }) 
    
    return result;
    }
  }

  sortList(){
       this.items.sort(function(a,b){
        if(a>b){
          return 1;
        }if(a<b){
          return -1;
        }

        return 0;
      })
  }

};

module.exports = SortedList;

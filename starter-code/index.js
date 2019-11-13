class SortedList {
    constructor() {
      this.items = [];
      this.length = 0;
    }
    add(item) {
      this.items.push(item);
      this.length++
      this.items.sort(function compareAscending(a, b) {
        if (a<b) {
        return -1;
        }
        if (a>b) {
        return 1;
        }
        if (a==b) {
        return 0;
        }
        }
        );
    }
    get(pos) {
      if (pos < this.items.length){
        return this.items[pos];
       
        
      }
      else{
        throw new Error ('OutOfBounds')
      }
  
    }
    max() {
      if(this.items.length > 0){
      return Math.max(...this.items);
      }
      else{
        throw new Error ('EmptySortedList')
      }
    }
    
    min() {
      if(this.items.length > 0){
        return Math.min(...this.items);
        }
        else{
          throw new Error ('EmptySortedList')
        }
    }
    average() {
      var sum = 0;
            if(this.items.length > 0){
              this.items.forEach((item)=> {
              sum += item;
              })
              return sum/this.items.length;
        }
        else{
          throw new Error ('EmptySortedList');
        }
    }
    sum() {
      var sum = 0;
            if(this.items.length > 0){
              this.items.forEach((item)=> {
              sum += item;
              })
              return sum;
        }
        else{
          return 0;
        }
    }
  };

//new SortedList();
//console.log(sortedList);

 console.log(this);
  module.exports = SortedList;



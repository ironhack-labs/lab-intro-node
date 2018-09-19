class SortedList {
  constructor() {
    this.items=[];
    this.length=this.items.length;
  }
  add(item) {
   this.items.push(item);
   this.items.sort(function(a, b) {
    return a - b;
    });

   this.length=this.items.length;
   }
  get(pos) {
       
    return this.items[pos-1];
  }
  max() {
    if(this.items.length!==0){
      
      function getMaxOfArray(x) {
        return Math.max.apply(null, x);
      }

      return getMaxOfArray(this.items);
    }
    else{
      throw new Error("EmptySortedList");
    }

  }
  min() {
    if(this.items.length!==0){
      
      function getMaxOfArray(x) {
        return Math.min.apply(null, x);
      }

      return getMaxOfArray(this.items);
    }
    else{
      throw new Error("EmptySortedList");
    }
  }
  average() {
    var sum=0;
    if(this.items.length!==0){
      this.items.forEach(function(item){
        sum=sum+item;  

      });
      return sum/this.items.length;
      }
    
      else{        
        throw new Error("EmptySortedList")
      }    


  }
  sum() {
    var sum=0;
    if(this.items.length!==0){
      this.items.forEach(function(item){
        sum=sum+item;  

      });
      return sum;
      }
    
      else{
        return 0;
      }    

  }
};

module.exports = SortedList;

class SortedList {
  constructor() {
    this.items=[];
    this.length=this.items.length;

  }

  add(item) {
    // var newArra=this.items;
    // newArra.push(item);
    this.length++;
    this.items.push(item);
    // newArra.sort((a, b) => a - b);
    this.items.sort((a, b) => a - b);
    // return newArra;
    return this.items;
  }

  get(pos) {
    if(this.items.find(element => element === pos)){
      return this.items[pos];
    }else{
      throw new Error("OutOfBounds");
    }
  }

  max() {
    let arra=this.items;
    if( this.length === 0){
      return EmptySortedList;
    }else{
      var max = Math.max(...arra);
      return max;
    } 
  }

  min() {
    var arra=this.items;
    if(this.length === 0){
      return EmptySortedList;
    }else{
      var min = Math.min(...arra);
      return min;
    }
  }

  sum() {
    var arra=this.items;
    if(this.length === 0){
      return 0;
    }else{
      var total = arra.reduce((acu,next)=>{
        return acu+next;
      });
    return total;
    }
  }

  avg() {
    var arra=this.items;
    if(this.length === 0){
      return EmptySortedList;
    }else{
      var total = arra.reduce((acu,next)=>{
        return acu+next;
      });
      return total/this.length;
    }
  }
}

module.exports = SortedList;

class SortedList {
  constructor(items=[]) {
    this.SortedList = items;
    this.length = this.SortedList.length;

  }
  add(item) {
    this.SortedList.push(item);
  }
  get(pos) {
    return this.SortedList[pos];
  }
  max() {
    let ordenado = this.SortedList.sort(function(a, b){return a-b});
    try{
    
      if(this.len===0) throw new Error("EmptySortedList")
      let max = ordenado[this.len-1];
      return max;
      
  
    }catch(e){
      return e.message;
    }
    
  }
  min() {
    let ordenado = this.SortedList.sort(function(a, b){return a-b});
    try{
    
      if(this.len===0) throw new Error("EmptySortedList")
      let min = ordenado[0];
      return min;
      
  
    }catch(e){
      return e.message;
    }
  }
  average() {
    let suma = 0
    this.SortedList.forEach(element => {
      suma +=element;
      });
    return suma/this.len
  }
  sum() {
    let suma = 0
    this.SortedList.forEach(element => {
      suma +=element;
      
    });
    return suma;
  }
};

module.exports = SortedList;

class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    if (this.length!==0){
      for (let i=0;i<this.length;i++){
        if (item>this.items[i]) {
          if (i<this.length-1){
          continue;}
          else{
            this.items.push(item)
          }
        }
        else {
          this.items.splice(i,0,item)
          break;
          
        }
        
      }
    }
    else{
      this.items.push(item)
    }
    this.length++;
  }
  get(pos) {}

  max() {}

  min() {}

  sum() {}

  avg() {}
}

module.exports = SortedList;

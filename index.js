class SortedList {
  constructor(item, length) {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.items.sort(function(a,b) {return a-b});
    this.length++;
    
  }

  get(pos) {
    if(pos > this.length){
      throw new Error('OutofBounds');
    } else{
      return this.items[pos]
    }
  }

  max() {
    if(this.length === 0){
      throw new Error('EmpySortedList');
    } else {
      return this.items[this.length-1];
    }
  }

  min() {
    if(this.length === 0){
      throw new Error('EmpySortedList');
    } else {
      return this.items[0];
    }
  }

  sum() {
    if(this.length === 0){
      return 0;
    } else {
      return this.items.reduce((total, amount)=> total+amount);
    }
  }

  avg() {
    if(this.length === 0){
      throw new Error('EmpySortedList');
    } else {
      return this.items.reduce((total, amount)=> total+amount)/this.length;
    }
  }
}

module.exports = SortedList;

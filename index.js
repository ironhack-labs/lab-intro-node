class SortedList {
  constructor() {
 this.items =[];
 this.length = 0;
  };

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length;
  }


  get(pos) {

    if(pos >= this.length){
      throw new Error('OutofBounds');
    }
    return this.items(pos)
  }


  max() {
    if(this.length === 0){
      throw new Error('EmptySortedList');
    }
    return this.items(-1);
    }
  }


  min() {
    if(this.length === 0){
      throw new Error('EmptySortedList');
    }
    return this.items(0);
    }
  }


  sum() {
return this.items.reduce((accumulator, element)=> accumulator + element, 0);
  }

  avg() {
    if(this.length === 0){
      throw new Error('EmptySortedList');
    }
    return this.sum() / this.length
  }

module.exports = SortedList;
  
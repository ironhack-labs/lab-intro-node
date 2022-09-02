class SortedList {
  
  constructor(items, length) {
    items= [];
    length = items.length
    this.items = items;
    this.length = items.length;
  // items = [];
  // length = items.length;
  // length = this.items.length;
  // this.items = items;
  // this.length = length;

  
  }

  sortEasy(){
    this.items.sort((a,b) => a-b);
  }

  add(item) {
 

  // this.items.unshift(item);
  this.items.push(+item);
  //  this.items.splice(0, 0, item);
   this.sortEasy()
   this.length =+1; // Needed to manually add the length. Feel like this is weird.
  }

  get(pos) {
    if (pos >= this.items.length || pos < 0) {
      throw new Error('OutOfBounds');
    }
 else {
   return  this.items[pos]
  }

  }

  max() {

    if (this.items.length === 0) {

      throw new Error('EmptySortedList');
    }
    else {
    this.sortEasy()
   return this.items[this.items.length-1]
  }
  }

  min() {
    if (this.items.length === 0) {

      throw new Error('EmptySortedList');
    }
    else {
      this.sortEasy()
     return this.items[0];
    }

  }

  sum() {

    let sumVal = 0;

  for(let i = 0; i < this.items.length; i++) {

    sumVal += this.items[i];

  }

   return sumVal;


  }

  avg() {
    if (this.items.length === 0) {

      throw new Error('EmptySortedList');
    } else {

      return this.sum()/this.items.length;
    }


  }
}

module.exports = SortedList;



// function sumPoop (array) {

// let sumVal = 0;

//   for(let i = 0; i < array.length; i++) {

//     sumVal += array[i];

//   }

// return sumVal;

// }
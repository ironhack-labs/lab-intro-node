class SortedList {
  constructor(items,length) {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
let array = this.items;
array.push(item);
array.sort( (a,b) => {
  return a - b
})
this.length = this.items.length;
  }

  get(pos) {
    if(pos > this.items.length - 1 || pos < 0) throw new OutOfBounds("foo");
    // continue l'algo
    return this.items[pos];
  }

  max() {
    if(this.items.length===0) throw new Error('EmptySortedList');
else {
  let i=this.items.length-1;
  return this.items[i];
}
  }

  min() {
        if(this.items.length===0) throw new Error('EmptySortedList');
else {
  return this.items[0];
}
  }

  sum() {
    if(this.items.length===0) return 0;
 
      return this.items.reduce(
        (accumulator, currentValue) => accumulator + currentValue
        )
  }
  avg() {
     if(this.items.length===0) throw new Error('EmptySortedList');
else {
  let sum = this.items.sum();
  let total = this.items.length;
  let average;
  return average = sum/total;
}
  }

}

/*
class Cat {
  constructor(name, kids) {
    this.name = name
    this.kids = kids
  }

  getName() {
    return this.name;
  }

  getNbrKids() {
    return this.kids.length
  }
}

var kitty = new Cat("kitty", ["toto", "titi"]);
var cat2 = new Cat("félix", []);
console.log(cat2.getName());

*/

module.exports = SortedList;

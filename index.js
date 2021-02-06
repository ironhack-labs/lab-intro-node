class SortedList {
  constructor() {

    this.items = [],
    this.length = this.items.length
  }

  add(item) {
 this.items.push(item)
this.items.sort()

  }

  get(pos) {
    if (pos <= this.items.length) {
 return this.items[pos]} 
 else {
  throw new Error('OutOfBounds');
 }
  }

  max() {
if (this.items.length === 0) {
  throw new Error('EmptySortedList');
} else {
    let max = Math.max(...this.items);
    return max
  }}

  min() {if (this.items.length === 0) {
    throw new Error('EmptySortedList');
  } else {
      let min = Math.min(...this.items);
      return min
    }}

  sum() {
    let sum = 0
for (let number of this.items) {
sum += number
}
return sum

  }

  avg() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    } else {
let avg = this.sum()/this.items.length
return avg
  }
  }
}

module.exports = SortedList;

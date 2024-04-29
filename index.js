// SortedList
// Constructor
//   1) should have items and length properties
// #add(x)
//   2) should add a single value to SortedList
//   3) should add a third value to SortedList
//   4) should add a value while keeping the list sorted


// #get(i)
//   5) should return an OutOfBounds exception if there is no element in that position
//   6) should return the element in that position
// #max()
//   7) should return an EmptySortedList exception if there is no elements in the list
//   8) should return the max (highest) value in the list
// #min()
//   9) should return an EmptySortedList exception if there are no elements in the list
//   10) should return the min (lowest) value in the list
// #sum()
//   11) should return the sum of all elements in the list
//   12) should return 0 for an empty sorted list
// #avg()
//   13) should return an EmptySortedList exception if there are no elements
//   14) should return the average of elements in the list



class SortedList {
  constructor() {
    this.items = []
    this.length = 0
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b)=>{
      return a - b
    })
    this.length++
  }

  get(pos) {
    if(pos < 0 || pos > this.items.length ){
      throw new Error("OutOfBounds"); 
    }
    return this.items[pos]
  }

  max() {
    if(this.items.length === 0){
      throw new Error("EmptySortedList");
    }
    let max = 0;
    this.items.forEach((eachNum)=>{
      if(eachNum > max){
        max = eachNum
      }
    })
    return max

  }

  min() {
    if(this.items.length === 0){
      throw new Error("EmptySortedList");
    }
    let min = this.items[0];
    this.items.forEach((eachNum)=>{
      if(eachNum < min){
        min = eachNum
      }
    })
    return min
  }

  sum() {
    let sumTotal = 0;
    this.items.forEach((eachNum)=>{
      sumTotal += eachNum
    })
    return sumTotal
  }

  avg() {
    if(this.items.length === 0){
      throw new Error("EmptySortedList");
    }
    let sumTotal = 0;
    this.items.forEach((eachNum)=>{
      sumTotal += eachNum
    })

    let average = sumTotal / this.items.length
    return average
  }
}

module.exports = SortedList;

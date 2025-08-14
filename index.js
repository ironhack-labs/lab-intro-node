class SortedList {
  constructor(items=[]) {
    this.items = [...items].sort((a,b)=>a-b)
  };
  get length() {
    return this.items.length;
  };
  add(item) {
   this.items.push(item);

   this.items.sort((a,b)=>a-b);
   return this.items

  };

  get(pos) {
    if(pos<0||pos>this.items.length||pos===null) {
      throw new Error('OutOfBounds')}
    return this.items[pos]
  };

  max() {
    if(this.items.length===0) throw new Error('EmptySortedList')
    return Math.max(...this.items)
    };

  min() {
    if(this.items.length===0) throw new Error('EmptySortedList')
    return Math.min(...this.items)
  };

  sum() {
    if(this.items.length===0){
      return 0
    }
    let sum = 0;
    this.items.map((number)=>{
      sum +=number;})
    return sum;
  };

  avg() {
    if(this.items.length===0) throw new Error('EmptySortedList')
    return this.sum()/this.items.length
  };
};

module.exports = SortedList;
const c = console.log

const myArray = [10,2,54,1,0]
c(`myArray is [${myArray}]`)
const newSortedList = new SortedList(myArray)
newSortedList.add(2);
c(`Sorted Array of numbers [${newSortedList.items}]`)
c(`Length of array is ${newSortedList.length}`)
newSortedList.get(3);
c(`The number in this position is ${newSortedList.get(3)}`)
newSortedList.max();
c(`Max number is ${newSortedList.max()}`)
newSortedList.min()
c(`Min number is ${newSortedList.min()}`)
newSortedList.sum();
c(`Sum of array numbers is ${newSortedList.sum()}`)
newSortedList.avg()
c(`average of sorted array is ${newSortedList.avg()}`)





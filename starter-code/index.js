class SortedList {

 
  constructor() {
  this.items = []
  this.length = this.items.length

  }

  add(item) {
    this.items.push(item)
    this.length = this.items.length
    this.items.sort((a,b) => {return a-b})
  }
  get(pos) {
    this.length = this.items.length
    return this.items[pos-1]
   
  }

  max() {
    if(this.items.length == 0){
      throw new Error("EmptySortedList")
    }
    return Math.max.apply(null,this.items)
  }
  min() {
    if(this.items.length == 0){
      throw new Error("EmptySortedList")
    }
    return Math.min.apply(null,this.items)
  }
  average() {

    if(this.items.length <= 0){
      throw new Error("EmptySortedList")
    } else{
      return this.sum()/this.items.length
    }
  }
  sum() {
if(this.items.length <= 0) {
 return 0}
else{

 return this.items.reduce((ac,element) => {return ac+element}

      );
}
    



  }
};

module.exports = SortedList;

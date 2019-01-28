

class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) { 
     this.items.push(item)
     this.length = this.items.length;

     if(this.length > 0){
      this.items.sort(function(a,b){return a - b});
     }
  }

  get(pos) { 
    try {
      return this.items[pos-1]//weil der test so dusselig geschrieben ist
     } 
     catch (e) {
       throw new Error("EmptySortedList")
     }
  }

  max() {
    try{
      return Math.max(...this.items)
    } 
    catch(e){
      throw new Error("EmptySortedList")
    }
  }

  min() {
    if(this.length = 0){ return new Error ("EmptySortedList")}
    else{ return Math.min(...this.items)}
  }

  sum() {
    if(this.length < 1){return 0;}
    return this.items.reduce((sum,next) => sum + next)
  }

  
  average() {    
    try {
      var sumArr = this.items.reduce((sum,next) => sum + next)
      sumArr /= this.items.length;
      return sumArr
    } 
    catch(e){
      throw new Error("EmptySortedList")
    }
  }
  
};

module.exports = SortedList;

var test = new SortedList()
test.add(1)
test.add(2)
test.average()

console.log(test.items)
console.log(test.length)
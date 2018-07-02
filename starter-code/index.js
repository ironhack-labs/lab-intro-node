class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }
  add(x) {
    this.items.push(x);
    this.length++
    this.items.sort((a,b) => a-b ) ;
  }
  get(i){
    return `${this.items[i-1]}`
  }
  max(){
    return this.items[this.length-1]
  }
  min(){
    return this.items[0]
  }
  average(){
    let sum = 0
    let avg = 0
    for (i=0;i< this.length; i++){
      this.items[i]
      sum = sum + this.items[i]
    }
   return avg = sum/this.length
  }
  sum(){
    let sum = 0
    for (i=0;i< this.length; i++){
      this.items[i]
      sum = sum + this.items[i]
  }
  return sum
}
}

/*SortedList.prototype.add     = function(item) {}
SortedList.prototype.get     = function(pos) {}
SortedList.prototype.max     = function() {}
SortedList.prototype.min     = function() {}
SortedList.prototype.average = function() {}
SortedList.prototype.sum     = function() {}*/

module.exports = SortedList;

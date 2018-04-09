class SortedList {
  constructor(){
    this.items = []
    this.length = this.items.length
  }
  add(x){
    this.items.push(x)
    this.items.sort((a,b) =>  a - b )
    this.length = this.items.length
  }
  get(i){
    this.length = this.items.length
    return this.items[i-1]
  }
  max(){
    let max = Math.max(...this.items)
    return max
  }
  min(){
    let min = Math.min(...this.items)
    return min
  }
  sum(){
    if(this.items.length == 0){
      return 'EmptySortedList'
    }
    else{
      return this.items.reduce(function(acc, num){ return acc += num})
    }
  }
  average(){
    return this.sum()/this.length
  }
};


module.exports = SortedList;

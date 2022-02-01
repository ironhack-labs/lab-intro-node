class SortedList {
  constructor() {
    this.items=[]
    this.length=this.items.length
  }

  add(item) {
    

    
        this.items.push(item)
        this.items.sort(function(a, b){
          return a-b
        })
        this.length=this.items.length
     
  
  
  }

  get(pos) {
    if(this.items.indexOf(pos)>0) return this.items[pos]
    else throw new Error('OutOfBounds')
  }

  max() {
    if(this.length===0) throw new Error('EmptySortedList');
    else return Math.max(...this.items)
  }

  min() {
    if(this.length===0) throw new Error('EmptySortedList');
    else return Math.min(...this.items)
  }

  sum() {
    let accumulator=(a,b)=> a+b
    if(this.length===0) return 0
    else return this.items.reduce(accumulator)
  }

  avg() {
    if(this.length===0) throw new Error('EmptySortedList');
    else return this.sum()/this.length
  }
}

module.exports = SortedList;

class SortedList {
  constructor() {

    this.items= []
    this.length= this.items.length

  }

  add(item) {
    this.items.push(item)
    this.items.sort((a,b)=> a-b)
    this.length=this.items.length

  }

  get(pos) {

    if(this.items[pos]) return this.items[pos]

    throw new Error('EmptySortedList')
    

  }

  max() {

    if(!this.items.length) throw new Error('EmptySortedList')
    let mayor= this.items[0]
    for(let i=1; i<this.items.length;i++){
          if(this.items[i]>mayor) mayor=this.items[i]
    }
        return mayor

    
  }
  
  min() {
    
    if(!this.items.length) throw new Error('EmptySortedList')
    let menor= this.items[0]
    for(let i=1; i<this.items.length;i++){
          if(this.items[i]<menor) menor=this.items[i]
    }
        return menor
    
  }
  
  sum() {
    if(!this.items) return 0
    
    let acum=0
    this.items.forEach((item)=>{
      acum += item
      
    })
    return acum
    
  }
  
  avg() {

    if(!this.items.length) throw new Error('EmptySortedList')

    return this.items.reduce((a,b) => a+b)/this.items.length

  }
  
}

module.exports = SortedList;

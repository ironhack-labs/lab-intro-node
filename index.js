class SortedList {

  // Inicio el constructor...
  constructor() {
    this.items = new Array()
    this.length = 0
  }

  add(item) {
    
    // Puseamos el item que nos pasan
    this.items.push(item)

    // Una vez pueseado ordenamos la lista
    this.items.sort(function(a,b){return a-b})

    // Actualizamos la longitud
    this.length = this.items.length
   
  }

  get(pos) {
    if(pos > this.length) throw new Error ('OutOfBounds')
    return this.items[pos]
  
  }

  max() {
    if(this.items == "") throw new Error('EmptySortedList')
    return Math.max(...this.items)
  }

  min() {
    if(this.items == "") throw new Error('EmptySortedList')
    return Math.min(...this.items)
  }

  sum() {}

  avg() {}
}

module.exports = SortedList;

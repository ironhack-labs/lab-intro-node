
// 1. CLASE
class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }


  add(item) {
    
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length += this.items.length
  
  }

  get(pos) {
    const index = this.items.indexOf(pos);
    if (index === -1){
      throw new Error('OutOfBounds');
    }
    return this.items[index]
  }


  max() {

    if(this.items.length === 0){
      throw new Error('EmptySortedList');
    }

    return Math.max(...this.items)
  }

  min() {
    if(this.items.length === 0){
      throw new Error('EmptySortedList');
    }

    return Math.min(...this.items)

  }


  sum() {

  let sumaT = 0;

  for (let i = 0; i < this.items.length; i++) {
    sumaT += this.items[i] 
  }

  return sumaT;

  }



  avg() {

    if(this.items.length === 0){
      throw new Error('EmptySortedList');
    }


    let itemAvr = this.items.reduce((a, b) => a + b ) / this.items.length

    return itemAvr;
  }
}



// 2. INSTANCIA

let list = new SortedList()





// 3. EXPORT
module.exports = SortedList;



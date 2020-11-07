class SortedList {
  
  constructor() {
    this.items = []; 
    this.lenght = this.items.length;
  }

  add(item) { //Iteration 2
    this.items.push(item);        //Agregar Elementos
    this.items.sort((a,b)=>a-b);   //Ordenar Elementos Array Ascendente
    
  }

  get(pos) {   //Iteration 3
      if (this.items[pos] !== undefined) {
      return this.items[pos]
      } else {
      throw new Error('OutOfBounds');
    }
    }
    

  max() { //Iteration 4
    if (this.items.length === 0) { 
      throw new Error('EmptySortedList'); 
    }else{
      return Math.max.apply(null, this.items);
    }
  }

  min() {  //Iteration 5
    if (this.items.length === 0) throw new Error('EmptySortedList'); 
    else return Math.min.apply(null, this.items);
  }

  sum() {   //Iteration 6
    if (this.items.length === 0) return 0; 
    else {
      let suma = this.items.reduce((a,b) => a + b, 0);
      return suma;  
      }
    }
  

  avg() {   //Iteration 7
   
    if (this.items.length === 0) throw new Error('EmptySortedList'); 
    else {
      return this.sum()/this.items.length;
      }
    }
}

module.exports = SortedList;

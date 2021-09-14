class SortedList {
  constructor(items,length) {
    this.items=[];
    this.length=this.items.length;
  }

  add(item) {
 this.items.push(item);// agregando el item al array
 this.items.sort((a,b)=>a-b );//orden ascendente
 this.length=this.items.length//
  }
  get(pos) {
    if(this.items[pos]===undefined){
      throw new Error('OutOfBounds');
    }else{
      return this.items[pos];
    }   
  }

  max() { //  devuelve el valor mas alto
    if(this.length===0){
      throw new Error('EmptySortedList');
    }else{
       
    return this.items[this.length-1] // para que tome la ultima posicion del array 
    }
  }

  min() {
    if(this.length===0){
      throw new Error('EmptySortedList');
    }else{
      return this.items[0]//en la primera posicion del array
    }
  }

  sum() {
  let suma=0;
  for(let i=0;i<this.items.length;i++){
     suma += this.items[i]
  }
  
  return suma
  }

  avg() {
    if(this.length===0){
      throw new Error('EmptySortedList');
    }else {
    let avg=0;
    for(let i=0;i<this.items.length;i++){
avg += this.items[i]
    }
  return avg/this.length;

  }
  }
}

module.exports = SortedList;

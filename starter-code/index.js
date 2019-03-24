class SortedList {
  constructor(length) {
    this.item=[];
    this.length=this.item.length;
  }
  add(item) {

    
     this.item.push(item);
  

     this.item.sort((a, b) =>{
      return a-b;
    });
  

     this.length=this.item.length;


  }

  get(pos) {
      return this.item[pos-1];
}
  max() {

   if(this.length==0){

    throw new Error("EmptySortedList")

   }else{
    return Math.max(...this.item);
   }


  }
  min() {
    if(this.length==0){

      throw new Error("EmptySortedList")
  
     }else{
      return Math.min(...this.item);
     }

  }
  average() {

    if(this.length==0){

      throw new Error("EmptySortedList")
  
     }else{
      let sum;
      sum=this.sum();
      return sum/this.length;
     }

  }
  sum() {
    var suma=0;

    if(this.length!==0){
      /* Opcion ES5
          for(var i=0;i<this.length;i++){

            suma+=this.item[i];
          
          }
      */
     //Opcion ES6
     suma=this.item.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    });
  }
    return suma;
    
  
}
};

module.exports = SortedList;

class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    let newArr = this.items;
    newArr.push(item)
    newArr.sort((a, b)=>{return a-b})
     this.length++
  
  }

  get(pos) {
    if(pos <= this.length-1){
      let array = this.items;
      for(let i=0; i <= array.length; i++){
        if( i === pos){
          return array[i];
        }
      }
    } else{
      throw new Error('OutOfBounds');
    }
  }

  max() {
    let array = this.items;
    if(array){
      const maxNum = (array) =>{
        const mayor = array.reduce((acum, value)=>{ 
          return acum > value ? acum : value})
       return mayor    
    }
    return maxNum(array)
    }else if(!array){
      throw new Error('EmptySortedList');
    }
  }

  min() {
    let array = this.items;
    if(array){
      const maxNum = (array) =>{
        const mayor = array.reduce((acum, value)=>{ 
          return acum < value ? acum : value})
       return mayor    
    }
    return maxNum(array)
    }else if(!array){
      throw new Error('EmptySortedList');
    }
  }

  sum() {
    let array = this.items;
    if(array){
      const maxNum = (array) =>{
        const mayor = array.reduce((acum, value)=>{ 
          return acum > value ? acum : value})
       return mayor    
    }
    return maxNum(array)
    }else if(!array){
      return 0;
    }

  }

  avg() {}
}

module.exports = SortedList;

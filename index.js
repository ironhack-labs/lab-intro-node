class SortedList {
  constructor() {

    this.items = []
    this.length = 0


  }

  add(item) {

    this.items.push(item);
    this.items.sort((a,b) => a-b);
    this.length++;
    


  }


  get(pos) {
    if (pos >= this.length ){

      throw new Error ("OutOfBounds")

    }

    return this.items[pos]

  }

  max() {

    if (this.length === 0 ){
      throw new Error ("EmptySortedList")
    }

   return this.items[this.length-1]


  }

  min() {


    if (this.length === 0 ){
      throw new Error ("EmptySortedList")
    }

  return this.items[0]

  }

  sum() {
   
  if (this.items.length === 0){
  return 0 
  } 

  const result = this.items.reduce(function(a,c){

  return a+c   

  })

  return result 

  }

  avg() {
   
    if (this.length === 0 ){
      throw new Error ("EmptySortedList")
    }
    
   const result =  this.sum() / this.length 

   return result 

  }

}

module.exports = SortedList;

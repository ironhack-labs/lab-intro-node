class SortedList {
  constructor() {
    this.items= [];
    this.length= this.items.length;
  }
 
  add(item) {  
     this.items.push(item);
     this.length= this.items.length;
     this.items.sort( (a,b)=>{return a-b})
  }

  get(pos) {
    try {return this.items[pos-1]}
    catch(error) {console.log(error)}
  }

  max() {
  
    if(this.items.length===0){throw new Error('EmptySortedList');}
    else { return this.items[this.length-1]
     }
  }


  min() {
    if(this.items.length===0){throw new Error('EmptySortedList');}
    else{ return this.items[0]
    } 
  }

  sum() {
    return this.items.reduce( (acc, current ) =>{return acc+current}, 0)
  }

  average() {
    if(this.items.length!==0){return this.sum()/this.items.length}
    else{throw new Error('EmptySortedList')}
  }


};

module.exports = SortedList;

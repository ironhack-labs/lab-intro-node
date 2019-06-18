class SortedList {
  constructor() {
    this.items= [];
    this.length= this.items.length;
  }
 
  add(item) {  
    
    /*if(this.length==0){this.items.push(item)}
    else{
        var pos=0;
        for (let i=0; i<this.length; i++){
            if(this.items[i]<item){pos++}
            else{
              this.items.splice(pos, 0, item)}
            }
      }
      */
     this.items.push(item);
     this.length= this.items.length;
     this.items.sort( (a,b)=>{return a-b})
  }

  get(pos) {
    //if(pos < this.length){return items[pos]}
    //else if (typeof array[pos] == 'undefined') {alert ('out of bounds');}
    
    try {return this.items[pos-1]}
    catch(error) {console.log(error)}
  }

  max() {
  
    if(this.items.length===0){throw new Error('EmptySortedList');}
    else { return this.items[this.length-1]
      /*var max=0;
      for (let i=0; i<this.length; i++){
        if(this.items[i]>=max){max=this.items[i]}
      }
      return max 
      */  
     }
  }


  min() {
    if(this.items.length===0){throw new Error('EmptySortedList');}
    else{ return this.items[0]
      /*{
        var min=0;
        for (let i=0; i<this.length; i++){
          if(this.items[i]<min){min=this.items[i]}
        }
        return min   
        }*/
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

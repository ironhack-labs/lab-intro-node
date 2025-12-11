class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    // ADD THE NEW ITEM TO THE END OF THE ARRAY
    this.items.push(item);

    //INCREMENT THE LENGTH PROPERTY MANUALLY
    this.length++;

    //SORT THE ENTIRE ARRAY USING A NUMERIC COMPARATOR
    this.items.sort((a, b) => a - b);
  }

  get(pos) {
    // CHECK THE LOWER BOUND: POSITION MUST BE 0 OR GREATER 
    // THE UPPER BOUND: POSITION MUST BE LESS THAT THE TOTAL LENGTH

    if(pos >= 0 && pos < this.length ){
     // THE CODE RUNS ONLY IF BOTH CONDITIONS ARE TRUE

     //THE POSITION IS VALID (WITHIN BOUNDS)
     return this.items[pos];   
    }else {
      // THE POSITION IS INVALID (OUT OF BOUNDS)
      //STOPING THE FUCTION IMMEDIATELY AND "THROW" AN EXCEPTION 
      throw new OutOfBoundsError(`OutOfBoundsError: Position ${pos} is out of bounds of the list.`)
    }
  }

  max() {
    if(this.length === 0){
      //IF EMPTY, IMMEDIETLY THROW THE REQUIRED ERROR/EXECPTION
      throw new Error("EmptySortedListError: Cannot find max value in an empty list.");
    }

    //IF THE LIST IS NOT EMPTY, RETURN THE LAST ELEMENT
    //SINCE THE LIST IS SORTED, THE HIGHEST VALUE IS ALWAYS THE LAST INDEX (LENGTH -1)
    return this.items[this.length -1];
  }

  min() {
    if(this.length === 0){
      throw new Error("EmptySortedList: Cannot find min value in an empty list.")
    }
    //BECAUSE THE LIST IS SORTED, THE MINIMUM VALUE IS ALWAYS THE FIRST ELEMENT (INDEX 0) 
    return this.items[0];
  }

  sum() {
    
    //RETURNING 0 FOR THE EMPTY SORTED LIST
    if(this.length === 0 ){
      return 0;
    }


    //"REDUCE" TAKES A CALL BACK FUNCTION (ACCUMULATOR, CURRENTVALUE) =>...
    //THE SECOND ARGUMENT '0' IS THE STARTING VALUE OF THE ACCUMULATOR
     const totalSum = this.items.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
     }, 0);

     return totalSum;
  }

  avg() {
    
    //RETURNING THE EMPTY LIST IF THERE IS NO ELEMET
    if(this.length === 0){
      throw new EmptySortedList("EmptySortedList: Cannot find the element in the list")
    }

    //CALCULATE THE SUM OF ALL ELEMENTS (REUSING THE SUM() METHOD IS CLEANER)
    const total = this.sum();

    //Divide the total sum by the number of items
    return total / this.length;
  }
}

module.exports = SortedList;

class SortedList {
  constructor ()
  {
    this.items = [];
    this.length = this.items.length;
  }

  add ( item )
  {
    this.items.push( item );
    this.items.sort( function ( a, b )
    {
      return a - b;
    } );
    this.length = this.items;
  }

  get(pos) {
    if (!this.items[pos]) {
      throw new Error('OutOfBounds');
    }
    return this.items[pos];
  }

  max() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    }
    let number = 0;
    this.items.forEach((item) => {
      if (number < item) {
        number = item;
      }
    });
    return number;
  }


  min() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    }



    let number = this.items[0];
    this.items.forEach((item) => {
      if (number > item) {
        number = item;
      }
    });
    return number;
  }


  sum ( numbers )
  {
	  let sum = 0; 
	  for (let i = 0; i < numbers.length; i++) {
	    if (typeof numbers[i] === "number") {
	      sum += numbers[i];
	    } else if (typeof numbers[i] === "string") {
	      sum += numbers[i].length;
	    } else if (typeof numbers[i] === "boolean") {
	      sum += numbers[i];
	    } else {
	      throw new Error("err");
	    }
	  }
	  return sum; 
	}


  avg(numbersAvg) {
    let average = 0; 
  
    if (numbersAvg.length === 0) {
      return null; 
    }
  
    for (let i = 0; i < numbersAvg.length; i++) {
      average += numbersAvg[i];
    }
  
    average = average / numbersAvg.length; 
  
    return average; 
  }
}
module.exports = SortedList;

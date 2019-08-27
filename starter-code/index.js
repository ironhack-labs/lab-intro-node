class SortedList {
    constructor() {
      this.items = [];
      this.length = 0;
    }
    add(item) {
      this.items.push(item);
      this.items.sort((a, b) => a - b);
      this.length++;
      
    }
    get(pos) {
      if (this.length === 0) {
         throw new Error("OutOfBounds");
      } else {
        return this.items[pos];
      }

    }
    max() {
      if(this.length === 0){ //si SortedList est vide
      throw new Error("EmptySortedList") //renvoyer une erreur
      } else {
        return Math.max(...this.items) //renvoie le plus grand nombre d'une série de 0 ou plusieurs nombres.
      }

    }
    min() {
      if (this.length === 0) {
        throw new Error ("EmptySortedList")
      } else {
        return Math.min(...this.items) //renvoie le plus petit nombre d'une série de 0 ou plusieurs nombres.
      }
    }
    average() {
      if (this.length === 0) {
        throw new Error ("EmptySortedList")
      } else {
        return this.sum()/this.length;
      }
    }
    sum() {
      if(this.length === 0) {
        return 0;
      } else {
        let sum = this.items.reduce((a, b) => a + b);
        return sum;
      }
    }
  };
  
  module.exports = SortedList;

  
class SortedList {
    constructor() {
      this.items = []
      this.length = this.items.length
    }

    add(x) {
      this.items.push(x)
      this.length = this.items.length
      this.items.sort((a, b) => a - b)
    }

    get(pos) {
      if (pos >= this.length){
        return "OutOfBounds"
      }else{
        return this.items[pos]
      }
    }

    max() {
      if(this.length == 0){
        throw new Error("EmptySortedList")
      } else {
        return this.items[this.length - 1]
      }
    }

    min() {
      if (this.length == 0) {
        throw new Error("EmptySortedList")
      } else {
        return this.items[0]
      }
    }

    average() {
      if (this.sum()){
        return this.sum()/this.length
      }else{
        throw new Error("EmptySortedList")
      }
    }

    sum() {
      let acu = 0
      this.items.forEach(elm => {
        acu += elm
      });
      return acu
    }
  };
  
  module.exports = SortedList;
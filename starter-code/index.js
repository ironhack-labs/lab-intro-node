class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length
  }
  add(item) {
    this.items.push(item)
    this.length = this.items.length
  }
  get(pos) {
    this.items.sort(function(a, b) {
      return a - b
    })
    return this.items[pos-1]
    
  }
  max() {
    try {
      if(this.items.length > 0){
        let nums = this.items.sort(function(a, b) {
          return a - b
        })
        return nums[nums.length-1]
      }
      else {
        return error
      } 
    }
    catch (error) { 
      throw new Error("EmptySortedList")
    }
  }
  min() {
    try {
      if(this.items.length > 0){
        let nums = this.items.sort(function(a, b) {
          return a + b
        })
        return nums[nums.length-1]
      }
      else {
        return error
      } 
    }
    catch (error) { 
      throw new Error("EmptySortedList")
    }
  }
  average() {
    try {
      if(this.items.length > 0){
        return this.sum() / this.items.length
      }
      else {
        return error
      } 
    }
    catch (error) { 
      throw new Error("EmptySortedList")
    }
  }
  sum() {
    if(this.items.length > 0){
      return this.items.reduce((accumulator, currentValue) => accumulator + currentValue)
    }

      return 0
  }
};

module.exports = SortedList;

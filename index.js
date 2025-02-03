class SortedList {
  constructor(items, length) {

    this.items = []
    this.length = 0
  }

  add(item) {

    this.items.push(item)
    //this.items.sort()
    this.items = this.items.sort(function (a, b) {  return a - b;  });
    this.length = this.items.length

  }

  get(pos) {

    if(this.length > pos) { return this.items[pos] }
    else { throw new Error("OutOfBounds")}

  }

  max() {

    if(this.length == 0) { throw new Error("EmptySortedList")}

    else {return this.items[this.length - 1]}

  }

  min() {

    if(this.length == 0) { throw new Error("EmptySortedList")}

    else {return this.items[0]}

  }

  sum() {

    let sumatoria = 0
    this.items.forEach(number => {

      sumatoria = sumatoria + number

    });

    return sumatoria

  }

  avg() {

    if(this.length == 0) { throw new Error("EmptySortedList")}

    else {

      let sumatoria = 0
      let media = 0
      this.items.forEach(number => {
  
        sumatoria = sumatoria + number
  
      });
      
    media = sumatoria/this.length
    return media
  
    }

  }
}

module.exports = SortedList;

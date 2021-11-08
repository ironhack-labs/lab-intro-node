class SortedList {
  constructor() {
    this.items = []
    this.length = [].length
  }

  add(item) {
    this.length = this.items.push(item)
    this.items.sort(function(a,b){
      if(a < b){
        return -1
      }
    })
  }

  get(pos) {}

  max() {}

  min() {}

  sum() {}

  avg() {}
}

module.exports = SortedList;

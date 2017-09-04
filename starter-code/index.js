// ES6

class SortedList {

  constructor(){
    this.length = 0;
    this.list = [];
  }

  add(item){
    this.list.push(item);
    function sortingFunction(a, b) {
      if (a > b)
        return 1;
      else if (b > a)
        return -1;
      else
        return 0;
    }
  this.list.sort(sortingFunction);
  this.length++;
  }

  get(pos){
    return this.list[pos - 1];
  }

  max() {
    return this.list.pop();
  }

  min() {}

  average() {}

  sum() {}
}


module.exports = SortedList;

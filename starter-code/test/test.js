// fucntion SortedList ()
class SortedList {
  constructor () {
    this.length = 0;
    this.items = [];
  }

  // Sortelist prototype.add function
  add(item) {
    this.items.push(item);
    this.items.sort(function (a,b) {
      return a-b;
    });
    this.length = this.items.length;
  }

  // SortedList prototyp.get function
  get(pos) {
    return this.items[pos-1];
  }
}

let sl = new SortedList();



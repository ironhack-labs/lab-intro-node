class SortedList {

  constructor() {

    this.items = [];
    this.length = this.items.length;

  }



  add(item) {

    this.items.push(item);
    this.items.sort((a, b) => a > b);
    this.length = this.items.length;

  }

  get(pos) {

    return this.items[pos];

  }



  max() {



    if (this.items[this.length - 1]) return this.items[this.length - 1];
    else throw new Error("EmptySortedList");


  }


  min() {


    if (this.items[this.length - 1]) return this.items[0];
    else throw new Error("EmptySortedList");

  }


  average() {

    if (this.items[this.length - 1]) return this.sum() / this.length
    else throw new Error("EmptySortedList");
  }

  sum() {


    if (this.items[this.length - 1]) return this.items.reduce((accumulator, currentValue) => accumulator + currentValue);
    else return 0;
  }
}




module.exports = SortedList;


testList = new SortedList();
//console.log("length is " + testList.items.length);
testList.add(8);
testList.add(4);
testList.add(1);
//console.log(testList.length);
//console.log('First element is ' + testList.get(1));
//console.log("length is " + testList.length);
console.log(testList.max());
console.log(testList.sum());
console.log(testList.average());
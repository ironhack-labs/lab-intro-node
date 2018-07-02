/* jshint esversion: 6 */

class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(x){
   this.items.push(x);
   this.length = this.items.length;
   this.items.sort(function(numA, numB) {
     return numA - numB;
   });
  }

  get(index){
      return this.items[index-1];
    }

  max(items){
    return Math.max(...this.items);
  }

}


//   SortedList.prototype.max     = function() {};
//   SortedList.prototype.min     = function() {};
//   SortedList.prototype.average = function() {};
//   SortedList.prototype.sum     = function() {};
//

var list = new SortedList();
list.add(10);
list.add(20);
list.add(30);
list.add(100);
list.add(110);
list.add(120);
console.log(list.items);


module.exports = SortedList;

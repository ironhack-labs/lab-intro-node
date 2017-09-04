class SortedList {

  constructor() {
    this.length = 0;
    this.list = [];
  }

  add(item){
    this.list.push(item);
    this.length++;
    this.list.sort(function (a, b) {
      if (a > b) {
        return 1;
      }
      if (a < b) {
        return -1;
      }
      return 0;
    });
  }

  get(pos){
    return this.list[pos - 1];
  }

  max(){
    var array = this.list;
    return Math.max(...array);
  }

  min(){
    var array = this.list;
    return Math.min(...array);
  }

  average(){
    if (this.list.length === 0) {
      throw new Error("EmptySortedList");
    }

    var sum = this.list.reduce(function(accumulator, currentValue){
      return accumulator + currentValue;
    });

    return sum/this.list.length;
  }

  sum() {
    var sum = this.list.reduce(function(accumulator, currentValue){
      return accumulator + currentValue;
    },0);
    return sum;
  };
}

// const sorted = new SortedList(0, []);

// SortedList.prototype.add     = function(item) {
//   this.list.push(item);
//   this.length++;
//   // this.list.sort();
//   this.list.sort(function (a, b) {
//     if (a > b) {
//       return 1;
//     }
//     if (a < b) {
//       return -1;
//     }
//     // a muss gleich b sein
//     return 0;
//   });
// };
//
// SortedList.prototype.get     = function(pos) {
//   // if (pos > this.length){
//   //   throw new Error("foobar");
//   // }
//   return this.list[pos - 1];
// };
//
// SortedList.prototype.max     = function() {
//   var array = this.list;
//   return Math.max(...array);
// };

// SortedList.prototype.min     = function() {
//   var array = this.list;
//   return Math.min(...array);
// };

// SortedList.prototype.average = function() {
//   if (this.list.length === 0) {
//     throw new Error("EmptySortedList");
//   } else{
//     var sum = this.list.reduce(function(accumulator, currentValue){
//       return accumulator + currentValue;
//     });
//
//     return sum/this.list.length;
//   }
// };

// SortedList.prototype.sum     = function() {
//   var sum = this.list.reduce(function(accumulator, currentValue){
//     return accumulator + currentValue;
//   });
//   return sum;
// }

module.exports = SortedList;

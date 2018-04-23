var SortedList = function(item, length) {
    this.items = [];
    this.length = this.items.length;
};

SortedList.prototype.add     = function(item) {
    this.items.push(item);
    this.length = this.items.length;
    this.items.sort(function(a,b){
        return a - b;
    });
}
SortedList.prototype.get     = function(pos) {
   // this.pos = pos;
    //for(var i=0;i<this.length;i++){
      //  if(i==pos){
          return this.items[pos - 1];
    //}
//}
}
SortedList.prototype.max     = function() {

    return Math.max.apply(null, this.items);

}
SortedList.prototype.min     = function() {

    return Math.min.apply(null, this.items);

}
SortedList.prototype.average = function() {

    if(this.length >0){
      var sum = this.items.reduce(function(accumulator, currentValue){
        return accumulator + currentValue;
      }, 0);
      return sum / this.length;
    }
  }
SortedList.prototype.sum     = function() {

    if(this.length >0){
      var sum = this.items.reduce(function(accumulator, currentValue){
        return accumulator + currentValue;
      }, 0);
      return sum;
    }
  }

module.exports = SortedList;


var sortedList = new SortedList();

sortedList.add(1);
sortedList.add(2);
sortedList.add(3);

sortedList.get(1);
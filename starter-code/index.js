var SortedList = function() {
    this.items=[];
    this.length= this.items.length;
};

SortedList.prototype.add= function(item) {
    this.items.push(item);

    this.items.sort(function (a,b){
        return a-b;
    });
    this.length=this.items.length;

}
SortedList.prototype.get= function(pos) {

  //  if (pos>=this.length){
  //      return "OutOfBounds";
 //   } else{
        return this.items[pos-1];
  //  }
}
SortedList.prototype.max     = function() {

    return this.items[this.length-1];
}
SortedList.prototype.min     = function() {

    return this.items[0];
}
SortedList.prototype.average = function() {
    var total=0;
    this.items.forEach(function(i){
        total+=i;
    });
    return total/this.length;
}
SortedList.prototype.sum = function() {
    var total=0;
   if (this.length){
       this.items.forEach(function(i){
         total+=i;
       });
       return total;
   }
}

module.exports = SortedList;

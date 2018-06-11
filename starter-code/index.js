

var SortedList = function () {
this.items = [];
this.length = this.items.length;
};

var list = new SortedList ();

SortedList.prototype.add = function(item) {
this.items.push(item);
this.items.sort(function(element1, element2){
return element1-element2;
});
this.length+=1;
};


SortedList.prototype.get = function (pos) {
  if(this.length>0){
  return this.item [pos-1];
}
return 0;
};

SortedList.prototype.max = function (){
if(this.length>0){
return this.items[this.length-1];
}
return 0;
};


SortedList.prototype.min = function (){
if(this.length>0){
return this.items[0];
}
return 0;
};


SortedList.prototype.average = function () {
  if(this.length>0){
  return this.sum()/this.length; 
  }
  return 0;
};

 
SortedList.prototype.sum = function () {
    var sum = (accumulator, currentValue)=> accumulator+currentValue;
    if(this.length>0){
      return this.items.reduce(sum);
    }
    return 0;
  };

// module.exports = SortedList;
// };



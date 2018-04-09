class SortedList {

  constructor(items, length){
    this.items = [];
    this.length = this.items.length;
  };

  

  add(x) {
    this.items.push(x)
    this.items.sort(function(a,b){
      return a-b
    });

  };

  get(pos) {
      if(pos < 0 && pos > this.items.length){
        return "Out of bounds";
      } else {
      return (this.items[pos]);
      }
  }

  max() {
    
    return Math.max.apply(null,this.items);

  }

  min() {
    return Math.min.apply(null,this.items);
  }

  average() {
  return this.sum()/this.items.length;

  }
  sum() {
    if (this.items.length>0){
      var addition = 0;
      for(i=0;i<this.items.length; i++){
        addition+=this.items[i];
      }
      return addition;
    }
  }
};


var element = new SortedList();

module.exports = SortedList;



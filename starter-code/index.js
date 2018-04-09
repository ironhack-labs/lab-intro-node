var SortedList = function() {
  this.items = [];
  this.length = 0;
};

SortedList.prototype.add = function(item) {     
      this.items.push(item);  
      this.length = this.items.length;   
      this.items.sort ( function (a,b){
          return a-b;
      });
}
SortedList.prototype.get = function(pos) {
   return this.items[pos-1];
}
SortedList.prototype.max     = function() {  
  return this.get(this.length);     
}
SortedList.prototype.min     = function() {
  return this.get(1);    
}

  SortedList.prototype.sum     = function() { 
    if (this.length >= 1){
      var tot = this.items.reduce( function (acc,val){
        return acc + val;
      });   
      return tot;
    }
    else
      return 'EmptySortedList';      
  }

  SortedList.prototype.average = function() { 
    if (this.length >= 1){
      return this.sum()/this.length;
    }
    else
    return 'EmptySortedList';
    
  }
  

module.exports = SortedList;


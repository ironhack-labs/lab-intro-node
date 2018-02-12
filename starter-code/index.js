var SortedList = function() {
    this.items=[];
    this.length= this.items.length;
};

SortedList.prototype.add     = function(item) {   
    this.items.push(item);
    this.length= this.items.length;
    return this.items.sort((a,b)=>a-b);

}
SortedList.prototype.get     = function(pos) {
    return this.items[pos-1];
}
SortedList.prototype.max     = function() {
    
    return this.items[this.items.length-1];

}
SortedList.prototype.min     = function() {
    return this.items[0];
}
SortedList.prototype.average = function() {
    var pro=0;
    this.items.forEach(function(item){
          pro=pro+item;    
    })
return pro/this.items.length;

}
SortedList.prototype.sum     = function() {
    var pro=0;
    if(this.items.length>0){
        this.items.forEach(function(item){
            pro=pro+item;    
      })
    }
    return pro;
}

module.exports = SortedList;

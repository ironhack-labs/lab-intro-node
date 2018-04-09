var SortedList = function() {
    this.items= [];
    this.length = this.items.length;
};

var sl = new SortedList ();


module.exports = SortedList;


SortedList.prototype.add     = function(item) {
    this.items.push(item);
    this.items.sort(function(a,b){
        return a-b;
        });
    this.length = this.items.length;
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

SortedList.prototype.sum     = function() {
    if(this.items.length === 0){
        return this.items;
    }
    var theSum = 0;
    for(var i=0; i<this.items.length; i++){
        theSum += this.items[i];
    }
    return theSum;
}

SortedList.prototype.average = function() {
    if(this.items.length === 0){
        return this.items;
    }

    var theSum = 0;
    for(var i=0; i<this.items.length; i++){
        theSum += this.items[i];
    }
    
   var leng = this.items.length;

   return theSum/leng;
}
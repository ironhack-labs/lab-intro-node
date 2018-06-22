var SortedList = function() {
    this.items = [];
    this.length = this.items.length;
};

SortedList.prototype.add  = function(item) {
    this.items.push(item);
    this.items.sort(function (a,b){ //fuuncion de sorted acomoda y arregla elementos 
        return a-b
    });
    this.length = this.items.length;
}
SortedList.prototype.get = function(pos) {
return this.items[pos-1]; //para obtener 
}
SortedList.prototype.max = function() {
    return Math.max.apply(null, this.items); //null aplica como un for each 
}
SortedList.prototype.min  = function() {
    return Math.min.apply(null, this.items);//null aplica como un for each 
}

SortedList.prototype.sum = function() {
    if(this.length ==0){
        throw new Error("EmptySortedList")
    }
    return this.items.reduce(function(total, item){ //rduce un solo 
return total+item;
    });
}
SortedList.prototype.average = function() {
    if(this.length===0){
        throw new Error("EmptySortedList");
    }
    return this.sum()/this.length;
}


module.exports = SortedList;

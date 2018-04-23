var SortedList = function() {
    this.items = [];
    this.length = 0;
};

SortedList.prototype.add     = function(item){
    this.items.push(item);
    this.items.sort(function(a, b){
        return a - b;
    });
    this.length = this.items.length;
}
SortedList.prototype.get     = function(pos){
        return this.items[pos-1];
    

}
SortedList.prototype.max     = function(){
    if(this.items.length > 0){    
    return Math.max(...this.items)
    }

}
SortedList.prototype.min     = function(){
    if(this.items.length > 0){    
        return Math.min(...this.items)
        }

}
SortedList.prototype.average = function(){
    if(this.items.length > 0){    
    var total = 0;
    for(var i = 0; i < this.items.length; i++) {
        total += this.items[i];
    }
    var avg = total / this.items.length;
    return avg;
  }
}

//------another way to do it---------

SortedList.prototype.average = function(){
    if(this.items.length > 0){    
        return this.items.reduce(function (p, c) {return p + c;}) / this.items.length;
        }

}


SortedList.prototype.sum     = function(){
    if(this.items.length > 0){    
        return this.items.reduce(function (p, c) {
            return p + c;
          });
        }
}



module.exports = SortedList;

//------test in the command prompt------------
var sl = new SortedList()
console.log(sl.length);
sl.add(20);
sl.add(10)
sl.add(30)
sl.add(5);
console.log(sl.items)
console.log(sl);
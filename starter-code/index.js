var SortedList = function() {
        this.items = [];
        this.length = 0;
    };
        
    
    SortedList.prototype.add     = function(item) {
        this.items.push(item);
        this.items.sort(function(a,b){
            return a-b;
        });
        this.length++;    
    }

SortedList.prototype.get     = function(pos) {
    if(pos < 1 || pos > this.length){
        throw new Error( 'OutOfBounds'); 
    }
        return this.items[pos-1];
    
}

SortedList.prototype.max     = function() {
    return Math.max.apply(null, this.items);
}
SortedList.prototype.min     = function() {
    return Math.min.apply(null, this.items);

}
SortedList.prototype.average = function() {
    if(this.length == 0){
        throw new Error('EmptySortedList');
    }
    var avg = this.items.reduce(function(a,b){
        return a+b;
    });

    return avg / this.length;
}
SortedList.prototype.sum     = function() {
    if(this.length == 0){
        throw new Error('EmptySortedList');
    }
    var sum = this.items.reduce(function(a,b){
        return a+b;
    });

    return sum;
}

module.exports = SortedList;

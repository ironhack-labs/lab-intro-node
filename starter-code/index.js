let SortedList = function() {
    this.items = [];
    this.length = this.items.length;
};

SortedList.prototype.add = function(item) {
    
    this.items.push(item)
    this.items.sort(function(i1, i2){
        return i1-i2});
    
    this.length++;
}
SortedList.prototype.get = function(pos) {
    if(pos > this.items.length){
        return "Sorry, the position is out of bounds";
    }
    return this.items[pos-1];
}
SortedList.prototype.max = function() {
    if (this.items.length === 0) {
        return "The list is empty";
    } else {
        return this.items[this.items.length - 1];
    } 
}
SortedList.prototype.min = function() {
    if (this.items.length === 0) {
        return "The list is empty";
    } else {
        return this.items[0];
    }

}
SortedList.prototype.average = function() {
    if (this.items.length === 0) {
        return "The sorted list is empty";
    } else {
        return this.items.reduce(function(avg, e, i, arr) {

            if (i === this.items.length - 1) {
                return ((avg + e) / this.items.length);
            } else {
                return (avg + e);
            }
        }.bind(this), 0);
    }
}


SortedList.prototype.sum = function() {
    if (this.items.length === 0) {
        return "The sorted list is empty";
    } else {
        return this.items.reduce(function(sum, e) {
          return sum + e;
        }.bind(this), 0);
    }
}

module.exports = SortedList;

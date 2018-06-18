let SortedList = function() {
    this.items = [];
    this.length = this.items.length;
};

SortedList.prototype.add = function(item) {
    
    this.items.push(item)
    this.items.sort();
    
    this.length++;
}
SortedList.prototype.get = function(pos) {
    if(pos > this.items.length){
        return this.OutOfBounds();
    }
    return this.items[pos-1];
}
SortedList.prototype.max = function() {
    if (this.items === 0) {
        return this.EmptyList();
    } else {
        var max = this.items[0];
        this.items.forEach(function(e) {
            if(e > max){
                max = e;
            }
        }.bind(this));
    }
    return max; 
}
SortedList.prototype.min = function() {
    if (this.items.length === 0) {
        return this.EmptyList();
    } else {
        var min = this.items[0];
        this.items.forEach(function(e) {
            if(e < min){
                min = e;
            }
        }.bind(this));
    }
    return min;
}
SortedList.prototype.average = function() {
    if (this.items.length === 0) {
        return this.EmptySortedList();
    } else {
        this.items.reduce(function(avg, e, i, arr) {
            var average = 0;
            if (i === this.items.length - 1) {
                return average = ((avg + e) / this.items.length);
            } else {
                return average = avg + e;
            }
        }.bind(this), 0);
        return average;
    }
}


SortedList.prototype.sum = function() {
    if (this.items.length === 0) {
        return this.EmptySortedList();
    } else {
        return this.items.reduce(function(sum, e) {
            sum += e;
        }.bind(this), 0);
    }
}


SortedList.prototype.OutOfBounds = function(){
    return "Sorry, the position is out of bounds";
}

SortedList.prototype.EmptyList = function() {
    return "The list is empty";

}

SortedList.prototype.EmptySortedList = function() {
    return "The sorted list is empty";
}

module.exports = SortedList;

var SortedList = function() {};

SortedList.prototype.add     = function (item) {}
SortedList.prototype.get     = function(pos) {}
SortedList.prototype.max     = function() {}
SortedList.prototype.min     = function() {}
SortedList.prototype.average = function() {}
SortedList.prototype.sum     = function() {}

SortedList = function (){
    this.items = [];
    this.length = this.items.length;
};

SortedList.prototype.add = function (item) {
    this.items.push(item);
    this.length = this.items.length; //tal vez esto actualiza 
    this.items.sort(function (a,b) {
        return a - b;
    });
};

SortedList.prototype.get = function (pos) {
    return this.items[(pos - 1)];
}

SortedList.prototype.max = function () {
    if (this.items.length === 0){
        return this.items = [];
    }else{
        return Math.max(...this.items);
    }
}

SortedList.prototype.min = function () {
    if (this.items.length === 0) {
        return this.items = [];
    } else {
        return Math.min(...this.items);
    }
}

SortedList.prototype.average = function () {
    if (this.items.length === 0) {
        return this.items = [];
    } else {
        return this.items.reduce(function (a, b) {
             return a + b 
            }) / this.length;
    }
}

SortedList.prototype.sum = function () {
    if (this.items.length === 0) {
        return this.items = [];
    } else {
        return this.items.reduce(function (a, b) {
            return a + b
        });
    }
}

module.exports = SortedList;

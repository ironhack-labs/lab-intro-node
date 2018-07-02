var SortedList = function() {
    this.items=[]; 
    this.length = this.items.length;
};

SortedList.prototype.add= function(item) {
this.items.push(item);
this.length++;
this.items.sort((a,b) => a-b); // NO SABEMOS QUE PASÓ ¿?
}

SortedList.prototype.get     = function(pos) {
    return this.items[(pos-1)];

}

SortedList.prototype.max     = function() {
    var max = this.items[this.length-1]
    return max;
}

SortedList.prototype.min     = function() {
var min = this.items[0];
return min;
}

SortedList.prototype.average = function() {
    var sum=0;
    this.items.forEach(element => {
        sum += element;
    });
    var average = sum / this.length;
    return average;
}

SortedList.prototype.sum     = function() {
    var sum=0;
    this.items.forEach(element => {
        sum +=element;
    });
    return sum;
}

module.exports = SortedList;

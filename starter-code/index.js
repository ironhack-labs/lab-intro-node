var SortedList = function() {
    this.items = [];
    this.length = this.items.length;
};

SortedList.prototype.add     = function(x) {
    this.items.push(x);
    function sortNumber(a,b) {
        return a - b;
    }
    this.items.sort(sortNumber);
    this.length = this.items.length;
}


SortedList.prototype.get     = function(pos) {
    if (this.items.length > 0 && pos <= this.items.length && pos > 0){
        return this.items[pos-1];
    }
}

SortedList.prototype.max     = function() {
    if (this.items.length > 0){
        max = this.items[0];
        for (var i = 0; i < this.items.length; i++){
            if (this.items[i] > max){
                max = this.items[i];
            }
        }
        return max;
    } 
}
SortedList.prototype.min     = function() {
    if (this.items.length > 0){
        min = this.items[0];
        for (var i = 0; i < this.items.length; i++){
            if (this.items[i] < min){
                min = this.items[i];
            }
        }
        return min;
    } 
}
SortedList.prototype.average = function() {
    if (this.items.length > 0){
        sum = 0;
        n = this.items.length;
        for(var i = 0; i < n; i++){
            sum += this.items[i];
        }
        return sum/n;
    }
}

SortedList.prototype.sum     = function() {
    if (this.items.length > 0){
        sum = 0;
        n = this.items.length;
        for(var i = 0; i < n; i++){
            sum += this.items[i];
        }
        return sum;
    }
}

module.exports = SortedList;

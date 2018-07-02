var SortedList = function() {
    this.items = []
    this.length = this.items.length
};

SortedList.prototype.add = function(item) {
    this.items.push(item); 
    this.items.sort(function(a,b){
        return a - b
    }) 
    this.length = this.items.length;
}

SortedList.prototype.get     = function(pos) {
    var position = this.items[pos];
    this.length = this.items.length;
    return position

}


SortedList.prototype.max     = function() {
    this.items.sort(function(a,b){
        return b-a
    })
    return this.items[0]

}


SortedList.prototype.min     = function() {
    this.items.sort(function(a,b){
        return a-b
    })
    return this.items[0]

}
SortedList.prototype.average = function() {
    var counter = 0
    this.items.forEach(function(element){
        counter += element
    })
    return counter/this.items.length
}

SortedList.prototype.sum     = function() {
    var counter = 0
    this.items.forEach(function(element){
        counter += element
    })
    return counter

}

module.exports = SortedList;

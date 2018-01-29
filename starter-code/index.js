var SortedList = function() {
    this.items = [];
    this.length = this.items.length;
};


SortedList.prototype.add     = function(item) {
    this.items.push(item);
    this.length = this.items.length;
    this.items.sort((a,b) => {
        return a-b;
    }) 
}

SortedList.prototype.get     = function(pos) {
    return this.items[pos - 1];

    
}
SortedList.prototype.max     = function() {}
SortedList.prototype.min     = function() {}
SortedList.prototype.average = function() {}
SortedList.prototype.sum     = function() {}




module.exports = SortedList;

// class SortedList {
//     constructor(items, length) {
//         this.items = items;
//         this.length = length;
//     }

//     add(item) {
//         return this.items + this.item;
//     }

//     get(pos) {}

//     max() {}

//     min() {}

//     average() {}

//     sum() {}
// }

// module.exports = SortedList;

// var list = new SortedList (items, length);


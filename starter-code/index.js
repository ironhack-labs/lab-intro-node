// var SortedList = function() {};

// SortedList.prototype.add     = function(item) {}
// SortedList.prototype.get     = function(pos) {}
// SortedList.prototype.max     = function() {}
// SortedList.prototype.min     = function() {}
// SortedList.prototype.average = function() {}
// SortedList.prototype.sum     = function() {}


class SortedList {
    constructor (list = []) {
        this.items = list;
        this.length = this.items.length;
    }

add(x) {
    let i = 0;
    
    while (x > this.items[i] && i < this.length) {
            i++;
        }
    this.length++;
    this.items.splice(i, 0, x);
}
        
get(x) {
    return this.items[x - 1];
}
            
max() {
    return this.items[this.length - 1];
}
                
min() {
    return this.items[0];
}

sum() {
    let total = 0;
                            
    for (let i = 0; i < this.length; i++) {
        total += this.items[i];
    }
    console.log(total);
    return total;
}   

average() {
    if (this.length <= 0)
        return 0;
                        
        return (this.sum() / this.length);
}
                        


}
                                
let list = new SortedList([1,2,4,5]);
// list.add(8);
// list.get(2);
// list.max();
// list.min();
// list.average();
// list.sum();
module.exports = SortedList;
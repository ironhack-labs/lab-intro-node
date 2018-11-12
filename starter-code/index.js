class SortedList {
    constructor() {
        this.items = [];
        this.length = 0;
    }
    add(item) {
        this.items.push(item);
        this.items.sort(function(a, b){return a-b});
        this.length ++;
    }
    get(pos) {
       return  this.items[pos-1];
    }
    max() {
        if (this.length === 0){
            throw new Error("EmptySortedList")
        }else{
            return Math.max(...this.items);
        }
    }
    min() {
        if (this.length === 0){
            throw new Error("EmptySortedList")
        }else{
            return Math.min(...this.items);
        }
    }
    average() {
        if (this.length === 0){
            throw new Error("EmptySortedList")
        }else{
            return this.sum()/this.length;
        }
    }
    sum() {

       return  this.items.reduce(function(ac, value){
          return ac + value;
        },0);
    }
};

module.exports = SortedList;
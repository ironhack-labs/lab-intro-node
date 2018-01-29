class SortedList {
    constructor(){
        this.items = [],
        this.length = 0
    }

    add(x){
        this.items.push(x);
        this.length++;
        this.items.sort((a,b)=>a-b);
    }

    get(pos){
        return this.items[pos-1];
    }   

    max(){
        return Math.max(...this.items);
    }

    min(){
        return Math.min(...this.items);
    }

    average(){
        if(this.length!==0){
            return this.items.reduce((total, score) => (total + score)) / this.length;
        }
    }

    sum(){
        if(this.length!==0){
            return this.items.reduce((total, score) => total + score);
        }
    }

}

// var SortedList = function() {};

// SortedList.prototype.add     = function(item) {}
// SortedList.prototype.get     = function(pos) {}
// SortedList.prototype.max     = function() {}
// SortedList.prototype.min     = function() {}
// SortedList.prototype.average = function() {}
// SortedList.prototype.sum     = function() {}

module.exports = SortedList;

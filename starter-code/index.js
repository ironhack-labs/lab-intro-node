class SortedList {

    constructor(items=[]) {
        this.items = items;
        this.length = this.items.length;
    }

    add(x) {

        // let counter = 0;
        // while(x > this.items[counter]) {

        //     counter++

        // }
        
        // this.items.splice(counter,0,x);

        this.items.push(x);
        this.items.sort(function (a,b){
            if (a < b) {
                return -1;
            } else if (a > b) {
                return 1;
            } else {
            return 0;
            }

        });

        this.length = this.items.length;
    };

    get(i) {

        // this.length = this.items.length;        
        return this.items[i - 1];

    }

    max() {
        return this.items[this.items.length -1];
    }

    min() {
        
        return this.items[0];
    }

    average() {
        
        var total = this.items.reduce(function(sum,i){

            return sum + i;

        },0);

        return total / this.items.length;
    }

    sum() {
    
    var total = this.items.reduce(function(sum,i){

        return sum + i;

    },0);

    return total;
}

};

// SortedList.prototype.get     = function(pos) {}
// SortedList.prototype.max     = function() {}
// SortedList.prototype.min     = function() {}
// SortedList.prototype.average = function() {}
// SortedList.prototype.sum     = function() {}

module.exports = SortedList;
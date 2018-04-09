var SortedList = function() {
    this.items = [];
    this.length = this.items.length;
};

var sortedList = new SortedList();

// SortedList.prototype.add     = function(item) {
//     console.log(typeof(item));
//     this.items.push(item);
//     var arr = this.items;
//     arr = arr.sort(function(a, b){
//         if(a < b){
//             return -1;
//         }
//         else if(a > b){
//             return 1;
//         }
//         else{
//             return 0;
//         }
//     });
//     this.items = arr;
//     this.length = arr.length;
//     console.log(this.items);
//     return arr;
// }

SortedList.prototype.add     = function(item) {
    // console.log(typeof(item));
    var arr = this.items;

    if(typeof(item) == "number"){
        arr.push(item);
    }
    else if(typeof(item) == "object"){
        item.forEach(function(oneItem){
            arr.push(oneItem);
        });
    }

    arr = arr.sort(function(a, b){
        if(a < b){
            return -1;
        }
        else if(a > b){
            return 1;
        }
        else{
            return 0;
        }
    });
    this.items = arr;
    this.length = arr.length;
    // console.log(this.items);
    return this.items;
}

SortedList.prototype.get     = function(pos) {
    // console.log(this.items[pos]);
    return this.items[pos-1];
}

SortedList.prototype.max     = function() {
    // console.log(this.items[this.items.length - 1]);
    return this.items[this.items.length - 1];
}

SortedList.prototype.min     = function() {
    // console.log(this.items[0]);
    return this.items[0];
}

SortedList.prototype.average = function() {
    var sum = 0;
    var average = 0;
    var arr = this.items;
    arr.forEach(function(oneItem){
        sum += oneItem;
    });
    average = sum/(this.length);
    // console.log(average);
    return average;
}

SortedList.prototype.sum     = function() {
    var sum = 0;
    var arr = this.items;
    arr.forEach(function(oneItem){
        sum += oneItem;
    });
    // console.log(sum);
    return sum;
}

module.exports = SortedList;


sortedList.add(2);
sortedList.add(21);
sortedList.add(63);
sortedList.add([9, 3, 5]);

sortedList.get(2);

sortedList.max();
sortedList.min();
sortedList.sum();
sortedList.average();
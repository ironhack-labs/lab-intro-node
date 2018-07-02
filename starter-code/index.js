// var SortedList = function () {
//     this.items = [];
//     this.length = 0;
// };

// SortedList.prototype.add = function (item) {
//     this.items.push(item);
//     this.items.sort((a, b) => a - b);
//     this.length++;
// }
// SortedList.prototype.get = function (pos) {
//     return this.items[pos - 1];
// }
// SortedList.prototype.max = function () {
//     return this.items[this.length - 1];
// }
// SortedList.prototype.min = function () {
//     return this.items[0];
// }
// SortedList.prototype.average = function () {
//     let sum = 0;
//     this.items.forEach(e => {
//         sum += e;
//     })
//     return sum / this.length;
// }
// SortedList.prototype.sum = function () {
//     let sum = 0;
//     this.items.forEach(e => {
//         sum += e;
//     })
//     return sum;
// }

class SortedList {
    constructor(){
    this.items = [];
    this.length = 0;
    }
    add (item) {
        this.items.push(item);
        this.items.sort((a, b) => a - b);
        this.length++;
    }
    get(pos) {
        return this.items[pos - 1];
    }
    max() {
        return this.items[this.length - 1];
    }
    min() {
        return this.items[0];
    }
    average() {
        let sum = 0;
        this.items.forEach(e => {
            sum += e;
        })
        return sum / this.length;
    }
    sum() {
        let sum = 0;
        this.items.forEach(e => {
            sum += e;
        })
        return sum;
    }
};


module.exports = SortedList;

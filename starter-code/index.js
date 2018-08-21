class SortedList {
    constructor() {
        this.items = [];
        this.length = 0;
    }

    add(x) {
        this.items.push(x);
        this.length++;
        this.items.sort((a, b) => {
            return a - b
        })
    }

    get(pos) {
        return this.items[pos - 1];
    }
    max() {
       
        return this.items[this.length-1]
    }
    min() {
        return this.items[0]
    }
    average() {
        if (this.length === 0) {
            throw new Error("EmptySortedList") 
            return this.items
        }

        return this.sum() / this.length;
    }

    sum() {

        let av = this.items.reduce((acc, num) => {
            var sum = acc + num;
            return sum
        }, 0)
        return av
    }
};

module.exports = SortedList;
class SortedList {
    constructor(items, length) {
        this.items = []
        this.length = this.items.length
    }

    add(item) {
        this.items.push(item)
        this.length = this.items.length;
        this.items.sort((a, b) => a - b)
    }

    get(pos) {
        if (pos > this.length) {
            throw new Error("OutOfBounds")
        }

        return this.items[pos]
    }



    max() {

        if (this.items.length == 0) {
            throw new Error('EmptySortedList');
        } else {
            return Math.max(...this.items)
        }
    }

    min() {

        if (this.items.length == 0) {
            throw new Error('EmptySortedList');
        } else {
            return Math.min(...this.items)
        }


    }

    sum() {
        if (!this.length) {
            return 0;
        }

        return this.items.reduce((value, sum) => value + sum);
    }




    avg() {

        if (this.items.length == 0) {
            throw new Error('EmptySortedList');
        } else {


            return this.sum() / this.length
        }






    }
}

module.exports = SortedList;
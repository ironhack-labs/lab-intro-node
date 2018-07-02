class SortedList {
    constructor(list = []) {
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

    average() {
        if (this.length == 0)
            return 0;
        return (this.sum() / this.length);
    }

    sum() {
        let summary = 0;
        for (let i = 0; i < this.length; i++) {
            summary += this.items[i];
        }
        return summary;
    }
}
module.exports = SortedList;
class SortedList {
    constructor() {

        this.items = []
        this.length = this.items.length

    }

    add(item) {

        this.length++
            this.items.push(item)
        this.items.sort((a, b) => a - b)


    }

    get(pos) {

        if (pos < this.length) {
            return this.items[pos]
        } else {
            throw new Error('OutOfBounds')
        }


    }

    max() {

        if (this.length < 1) {
            throw new Error('OutOfBounds')

        } else {

            return Math.max(...this.items)



        }

    }

    min() {

        if (this.length < 1) {
            throw new Error('OutOfBounds')

        } else {

            return Math.min(...this.items)



        }

    }

    sum() {
        if (this.length < 1) {
            return 0

        } else {

            return this.items.reduce((a, b) => a + b, 0)



        }

    }

    avg() {
        if (this.length < 1) {
            throw new Error('EmptySortedList')

        } else {

            return this.items.reduce((a, b) => a + b, 0) / this.items.length



        }
    }
}

module.exports = SortedList;
class SortedList {
    constructor() {
        this.lista = [];
    }

    get length() {
        return this.lista.length;
    }

    get(pos) {
        if (pos > this.lista.length) {
            return 'OutOfBounds';
        }
        return this.lista[pos-1];

    }

    max() {
        if (this.length === 0) {
            throw new Error("EmptySortedList");
        }

        return this.lista[this.length - 1];
    }

    min() {
        if (this.length === 0) {
            throw new Error("EmptySortedList");
        }

        return this.lista[0];
    }

    average() {

        if (this.length === 0) {
            throw new Error("EmptySortedList");
        }


        const suma = this.sum();
        return suma / this.length;
    }

    sum() {

        if (this.length === 0) {
            return 0;
        }


        let suma = this.lista.reduce((total, item) => {
            return total + item;
        }, 0);

        return suma;
    }

    add(item) {

        this.lista.push(item);

        this.lista.sort((a, b) => {

                if (a === b) {
                    return 0;
                }
                if (a > b) {

                    return 1;
                } else {
                    return -1;
                }
            }
        );



    }
}

module.exports = SortedList;

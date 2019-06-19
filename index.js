class SortedList {
    constructor() {
        this.lista = [];
    }

    get length() {
        return this.lista.length;
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
                    return 0;
                }
            }
        );
    }

    get(pos) {
    }

    max() {
    }

    min() {
    }

    average() {
    }

    sum() {
    }
}

module.exports = SortedList;

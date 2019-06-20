"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SortedList {
    constructor() {
        this.lista = [];
    }
    get length() {
        return this.lista.length;
    }
    get(pos) {
        if (pos > this.lista.length) {
            throw new Error("OutOfBounds");
        }
        return this.lista[pos - 1];
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
        const suma = this.lista.reduce((total, item) => {
            return total + item;
        }, 0);
        return suma;
    }
    add(valor) {
        this.lista.push(valor);
        this.lista.sort((a, b) => {
            if (a === b) {
                return 0;
            }
            if (a > b) {
                return 1;
            }
            else {
                return -1;
            }
        });
    }
    toString() {
        return JSON.stringify(this.lista);
    }
    print() {
        console.log(this.toString());
    }
}
exports.default = SortedList;
//# sourceMappingURL=index.js.map
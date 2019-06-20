"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./index"));
const x = new index_1.default();
x.add(666);
x.print();
/* implementando el generic*/
class ListaN {
    constructor() {
        this.lista = [];
    }
}
const y = new ListaN();
y.lista.push(4);
console.log(y.lista.length);
let g1 = {
    nombre: 'n',
    apellidos: 'a'
};
let g2 = {
    no_aplica_interfaz: 'n',
};
function printG(item) {
    console.log(` ${item.nombre} - ${item.apellidos}`);
}
printG(g1);
// printG(g2);
//# sourceMappingURL=t2.js.map
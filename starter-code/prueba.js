const SortedList = require('index.js');

let Lista = new SortedList();

Lista.add(10);
Lista.add(20);
console.log(Lista.get(2));
console.log(Lista.sum());
console.log(Lista.min());
console.log(Lista.max());
console.log(Lista.average());
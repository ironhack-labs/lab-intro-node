import SortedList from "./index";

const x = new SortedList();

x.add(666);
x.print();

/* ---------------------------------------------- */

interface IListaNumber {
   lista: number[];
}

/*como generics*/
interface IListaGeneric<T> {
   lista: T[];
}

/* implementando el generic*/

class ListaN implements IListaGeneric<number> {
   lista: number[];

   constructor() {
      this.lista = [];
   }
}


const y = new ListaN();

y.lista.push(4);
console.log(y.lista.length);


/* usando interface par declara r tipo*/

interface INombre {
   nombre: string,
   apellidos: string;
}


let g1  ={
   nombre:'n',
   apellidos:'a'
};

let g2  ={
   no_aplica_interfaz:'n',
};

function printG( item:INombre) {
   console.log(` ${item.nombre} - ${item.apellidos}`);
}

printG(g1);
// printG(g2);

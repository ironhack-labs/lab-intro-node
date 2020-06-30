class SortedList {
   constructor(items) {
      this.items = [];
      this.length = this.items.length;
   }

   add(item) {
      this.items.push(item);
      this.items.sort((a, b) => a - b);
      this.length = this.items.length; // POURQUOI DOIT ON LE PRECISER ICI ALORS QUE LA VALEUR DE THIS.LENGTH DEPEND DEJA DE ITEMS.LENGTH DANS CONSTRUCTOR ???
   }

   get(pos) {
      if (pos > this.length) throw new Error('OutOfBounds');
      else return this.items[pos];
   }

   max() {
      if (this.length === 0) throw new Error('EmptySortedList');
      else {
         var max = 0;
         for (let i = 0; i < this.length; i++) {
            if (this.items[i] >= max) {
               max = this.items[i];
            }
         }
         return max;
      }
   }

   min() {
      if (this.length === 0) throw new Error('EmptySortedList');
      else {
         var min = this.max();
         for (let i = 0; i < this.length; i++) {
            if (this.items[i] <= min) {
               min = this.items[i];
            }
         }
         return min;
      }
   }

   sum() {
      if (this.length > 0) {
         return this.items.reduce(
            (accumulator, currentValue) => accumulator + currentValue
         );
      } else {
         return 0;
      }
   }

   avg() {
      if (this.length > 0) {
         return this.sum() / this.length;
      } else {
         throw new Error('EmptySortedList');
      }
   }
}

module.exports = SortedList;

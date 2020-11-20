class SortedList {
  constructor() {
    this.items =[];
    this.length = this.items.length;
  }

  add(item) {
    if(!this.items[0]) this.items.push(item); //si el array está vacio introducimos el elemento
    else if(item<this.items[0])this.items.unshift(item); //menor que el primer elemento
    else if(item>this.items[this.length-1])this.items.push(item);//mayor que el último elemento
    else{
      for(let i=0;i< this.items.length; i++){
        if(item<=this.items[i]){

            let leftArray = this.items.slice(0,i);
            leftArray.push(item);
            let rightArray = this.items.slice(i,this.items.length);
            this.items =leftArray;
            this.items = this.items.concat(rightArray);          
            break;
        }
      }   
    }
    this.length = this.items.length;  
  }

  get(pos) {
    if(pos>this.length)throw new Error('OutOfBounds');
    else return this.items[pos];
  }

  max() {
    if(!this.items[0])throw new Error('EmptySortedList');
    else return this.items[this.length-1];
  }

  min() {
    if(!this.items[0])throw new Error('EmptySortedList');
    else return this.items[0];
  }

  sum() {
    if(!this.items[0])return 0;
    else return this.items.reduce((prev,current) => prev+current);
  }

  avg() {
    if(!this.items[0])throw new Error('EmptySortedList');
    else return this.sum()/this.length;
  }
}

module.exports = SortedList;

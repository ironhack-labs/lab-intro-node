
class SortedList{
  constructor(){
    this.items = [];
    this.length = this.items.length;

  }
  add(x){
      this.items.push(x);
      this.items = this.items.sort((a,b) => a-b);
      this.length = this.items.length;
  }
  get(nth){
    return this.items[nth - 1];
  }
  max(){
    return this.items[this.length - 1];
  }
  min(){
    return this.items[0];
  }
  average(){
    //return (this.items.reduce(((acc, b)=> acc + b),0))/this.length;
    return this.sum()/this.length;
  }
  sum(){
    return this.items.reduce(((acc, b)=> acc + b),0);
  }
}


module.exports = SortedList;

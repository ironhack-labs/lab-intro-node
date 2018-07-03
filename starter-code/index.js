class SortedList{
  constructor(sortedList, length){
    this.sortedList = [];
    this.length = this.sortedList.length;
  }

  add(item){
    this.sortedList.push(item);
    this.sortedList.sort((a,b) => {
    return a - b;
    })
    this.length ++;
  }
  get(pos){
  return this.sortedList[pos-1];
    
  }
  max(){
  return Math.max(...this.sortedList);    
  }
  min(){
  return Math.min(...this.sortedList);    
  }
  
  average(){
    if(this.sortedList <= 0){
      return 0;
    } else {
      return this.sortedList.sum() / this.length;
    }
  }
  sum(){
    let tot = 0;
                            
    for (let i = 0; i < this.length; i++) {
        tot += this.items[i];
    }
    console.log(tot);
    return tot;
  }
}


module.exports = SortedList;

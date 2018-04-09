class SortedList {
  constructor(item, length){
    this.item = [];
    this.length = 0;
  }


add(x) {
  this.item.push(x);
  this.item = this.item.sort((a,b) => a - b);
  this.length = this.item.length;
}     

get(position) {
  return this.item[position - 1];
}

max() {
  if(this.length === 0) {
    return 'EmptySortedList';
  }else {
 return this.get(this.length);
  }
}

min() {
  if(this.length === 0) {
    return 'EmptySortedList';
  }else {
 return this.get(1);
  }
}

average() {
  function getSum(total, num) {
    return total + num;
  }
  if(this.length === 0) {
    return 'EmptySortedList';
  }else{
  
  return this.item.reduce(getSum)/this.length;
  }
}

sum() {
  return this.average()*this.length;
}

};

module.exports = SortedList;

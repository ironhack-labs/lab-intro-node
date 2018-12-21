function getSum(total, num) {
  return total + Math.round(num);
}

class SortedList {
  constructor() {
  	this.items=[];
  	this.length = this.items.length;
  }
  add(item) {
  	this.items.push(item);
  	this.items.sort();
  	this.length++; 
  }
  get(pos) { 
  	if((pos-1)<=this.length)
  		return (this.items[pos-1]);
  	else throw new Error("OutOfBounds") 
  }
  max() {
  	if(this.length==0) throw new Error("EmptySortedList");
  	else return (Math.max( ...this.items ));
  }
  min() {
  	if(this.length==0) throw new Error("EmptySortedList");
  	else return (Math.min( ...this.items ));
  }
  average() {
  	if(this.length==0) throw new Error("EmptySortedList");
  	let total=0;
  	this.items.forEach(function(item){
  		total+=item;
  	});
  	
  	return total/this.length;
  }
  sum() {
  	if(this.length==0) return 0;
  	let total=0;
  	this.items.forEach(function(item){
  		total+=item;
  	});
  	return total;
  }

};



module.exports = SortedList;

class SortedList {
    constructor() {
	this.items = []
	this.items[0] = 0
	this.length = 0;
	this.isEmpty = true;
	
	
    }
    
    add(item) {
	this.isEmpty = false
	this.length++
	this.items[this.length] = item
	if(this.length > 1){
	    for(let i = this.length; i > 0;i--){
		if(this.items[i] < this.items[i - 1]){
		    let x = this.items[i - 1]
		    this.items[i - 1] = this.items[i]
		    this.items[i] = x // swap
		}
	    }
	}
    }
    
    get(pos) {
	return this.items[pos]
    }
    
    max() {
	if(this.isEmpty)throw new Error("EmptySortedList")	    
	return this.items[this.length];    
	
  }
    min() {
	    if(this.length > 0) return this.items[1];    
	    throw new Error("EmptySortedList") 	
    }
    
    average() {
	if(this.isEmpty) throw new Error("EmptySortedList") 	
	return this.sum() / this.length
    }
    
    sum() {
	if(this.isEmpty) return 0 	
	let s = 0
	for(let i=1; i<= this.length; i++){
	    s += this.items[i] 
	}
	return s
	
  }
};

module.exports = SortedList;

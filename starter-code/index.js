class SortedList {
	constructor(items, length) {
		this.items = [];
		this.length = 0;
	}

	add(item) {
		this.items.push(item);
		this.items.sort(function(a,b){return a - b});
		this.length++;
	}

	get(pos) {
		return this.items[pos-1];
	}

	max() {

		return (Math.max.apply(null,this.items))
	}
	min() {
		return (Math.min.apply(null,this.items))
	}
	average() {
		if(this.items.length<1){
			throw new Error ("EmptySortedList") 

		}else{
			return this.items.reduce(function(a, b){ return a + b; })/this.items.length;
		}

	}
	sum() {
		if(this.items.length<1){
			throw new Error ("EmptySortedList")
			
		}else{
			return this.items.reduce(function(a, b){ return a + b; })
		}
	}
}

module.exports = SortedList;

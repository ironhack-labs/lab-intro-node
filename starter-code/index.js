// var SortedList = function() {};

// SortedList.prototype.add     = function(item) {}
// SortedList.prototype.get     = function(pos) {}
// SortedList.prototype.max     = function() {}
// SortedList.prototype.min     = function() {}
// SortedList.prototype.average = function() {}
// SortedList.prototype.sum     = function() {}

// module.exports = SortedList;

class SortedList {
	constructor() {
		this.items = [];
		this.length = 0;
	}
	add(x) {
		this.items.push(x);
		this.length = this.items.length;
		this.items.sort(function(a, b) {
			return a - b;
		});
	}
	get(pos) {
		return this.items[pos - 1];
	}
	max() {
		let highest = 0;
		for (let i = 0; i < this.items.length; i++) {
			if (highest < this.items[i]) {
				highest = this.items[i];
			}
		}
		return highest;
	}
	min() {
		let lowest = this.max();
		for (let i = 0; i < this.items.length; i++) {
			if (lowest > this.items[i]) {
				lowest = this.items[i];
			}
		}
		return lowest;
	}
	average() {
    let total=0;
    let averag;
		if (this.length === 0) {
			return 'EmptySortedList';
		} else {
			for (let i = 0; i < this.items.length; i++) {
				total = this.items.reduce((a, b) => a + b);
			}
			averag = total / this.length;
			return averag;
		}
  }
  sum(){
    if (this.length === 0) {
			return 'EmptySortedList';
		} else {
    let total = this.items.reduce((a, b) => a + b);
    return total;
  }
 }
}

let newSortedList = new SortedList();

module.exports = SortedList;

class SortedList {
    constructor (items = []) {
        this.items = items;
        this.length = this.items.length;
    }
  
  add(x) {
    let i = 0;
    
    while (x > this.items[i] && i < this.length) {
            i++;
        }
    this.length++;
    this.items.splice(i, 0, x);
  }
        
  get(x) {
    return this.items[x - 1];
  }
            
  max() {
    return this.items[this.length - 1];
  }
                
  min() {
    return this.items[0];
  }
                    
  average() {
    if (this.length <= 0)
        return 0;
                        
        return this.sum() / this.length;
  }
  sum() {
    let tot = 0;
                            
    for (let i = 0; i < this.length; i++) {
        tot += this.items[i];
    }
    console.log(tot);
    return tot;
  }
                        
  
  }
                                
  let list = new SortedList([1,2,4,5]);
  // list.add(8);
  // list.get(2);
  // list.max();
  // list.min();
  // list.average();
  // list.sum();
  module.exports = SortedList;
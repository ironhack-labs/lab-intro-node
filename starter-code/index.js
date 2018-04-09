// var SortedList = function() {};

class SortedList {
    constructor () {
      this.items = [];
      this.length = 0;
    }
    add(x){
        this.items.push(x)
        this.items.sort((a,b)=>a - b)
        this.length++
    }  

    get (e) {
    return this.items[e-1]; //duda con e-1
    }

    max () {
        return Math.max.apply(Math, this.items);  
    }

    min () {
        return Math.min.apply(Math, this.items);  
    }

    average ()  {
        if (this.length <= 0) return;
        let sum = this.items.reduce((a,b) => a+b)
        return sum/this.length;      
    }

    sum () {
        if (this.length <= 0) return;
        let sum = this.items.reduce((a,b) => a+b)
        return sum;
    }

}




module.exports = SortedList;

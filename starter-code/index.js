    var SortedList = function() {

    this.items = [];
    this.length = this.items.length;
    }

    SortedList.prototype.add     = function(item) {
       
       this.items.push(item);
       this.length = this.items.length;
       this.items.sort(function(a,b){
           return a - b;
       });
    }

    SortedList.prototype.get     = function(pos) {
        return this.items[pos-1];
    }
    SortedList.prototype.max     = function() {
        return Math.max.apply(Math, this.items);
        
    }
    SortedList.prototype.min     = function() {
        return Math.min.apply(Math, this.items);
    }
    SortedList.prototype.average = function() {
        var sum = 0;
            for( var i = 0; i < this.items.length; i++ ){
            sum += parseInt( this.items[i], 10 ); //don't forget to add the base
            }
            return sum/this.items.length;

    }
    SortedList.prototype.sum     = function() {
        var sum = 0;
        for( var i = 0; i < this.items.length; i++ ){
        sum += parseInt( this.items[i], 10 ); //don't forget to add the base
        }
        return sum;
    }

    
    module.exports = SortedList;

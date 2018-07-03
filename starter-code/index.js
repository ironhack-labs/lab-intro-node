    // var SortedList = function() {};

    class SortedList{
        constructor(items, length){
            this.items =[];
            this.length = this.items.length;
        }
        
        // SortedList.prototype.add     = function(item) {}
        
        add(x){
           this.items.push(x);
           this.items.sort((a,b) => {
              return a - b;
           })
           this.length++ 
        };
        get(pos){
            return this.items[pos-1]
          }

          max(){
            return Math.max(...this.items)  
          }

          min(){
            return Math.min(...this.items)  
          }

          sum(){
            return this.items.reduce((acc,current) => acc + current,0)
          }

          average(){
            if(this.items.length === 0){
                throw Error('EmptySortedList');
            }  
            return this.sum()/this.items.length;
          }
    
    }

        
    // SortedList.prototype.get     = function(pos) {}
    // SortedList.prototype.max     = function() {}
    // SortedList.prototype.min     = function() {}
    // SortedList.prototype.average = function() {}
    // SortedList.prototype.sum     = function() {}

    module.exports = SortedList;



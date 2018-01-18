var SortedList = function() {
    this.items = [];
    this.length = this.items.length;
}
SortedList.prototype.add = function(item) {
    //hay que meterlo ordenado en el array
    if(this.length === 0) {
        this.items.push(item);
    } else {
        for(var i=0; i<this.length; i++){
            if (item < this.items[i]){
            this.items.splice(i, 0, item);
            break;
            } else {
                this.items.push(item);
                break;
            }
        }   
    } 
    this.length++;
}
SortedList.prototype.get = function(pos) {
    return this.items[pos-1];
    
}
SortedList.prototype.max = function() {
    return this.get(this.length);
}
SortedList.prototype.min = function() {
    return this.get(1)
}
SortedList.prototype.average = function() {
    return this.sum()/this.length;
}
SortedList.prototype.sum = function() {
    if (this.length > 0){
        let total = 0;
    for(var i=0; i<this.length; i++){
        total += this.items[i];
    }
    return total;
    }
}

module.exports = SortedList;

const sl = new SortedList ();

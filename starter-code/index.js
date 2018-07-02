class SortedList {
    constructor () {
        this.items = [];
        this.length = this.items.length;
    }

add(x) {
    let i = 0;
    //whenever x is bigger than a location's value, x is spliced in at that location
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
return(this.sum()/this.length);
}
sum(){
    if(this.items.length ===0){
        return "Reduce of empty array with no initial value";
    }
    else {
        const reducer = (accumulator, currentValue)=> accumulator + currentValue;
        return (this.items.reduce(reducer));
    }
}
              

}

module.exports = SortedList;
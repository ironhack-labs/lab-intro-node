class SortedList {
    constructor() {
        this.items = []
        this.length = this.items.length
    }
    add(x) {
        this.length++
        this.items.push(x)
        return this.items.sort((a,b)=>{
            return a-b
        })
    }
    get(pos) {
        return this.items[pos -1]
    }

    max() {
            if (this.length === 0) {
                throw new Error("EmptySortedList")
            }else {
                return this.items[this.length - 1]
            }
    }

    min() {
        if(this.length === 0){
            throw new Error("EmptySortedList")
        }
        return this.items[0]
    }

    average() {
        if(this.length === 0){
            throw new Error("EmptySortedList")
        }else{
            var sum = 0
            this.items.forEach((e)=>{
                sum += e
            })
            return sum/this.length
        }
    }

    sum() {
        let sum = 0
        if(this.length === 0){
            return 0
        }else {
            this.items.forEach(function(x) {
                sum += x
            });
            return sum
        }

    }
};

module.exports = SortedList;

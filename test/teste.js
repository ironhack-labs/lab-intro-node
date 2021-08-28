class SortedList {
    constructor() {
        this.items = [];
        this.length = 0;
    }

    add(item){
        this.items.push(item);
        this.length++;
    }
}

const list = new SortedList();

list.add(2);
console.log(list);
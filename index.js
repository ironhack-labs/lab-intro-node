class SortedList 
{
  constructor() 
  {
    this.items = [];
    this.length = 0;
  }

  add(item) 
  {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length = this.items.length
  }

  get(pos) 
  {
    if(this.items[pos])
    {
      return this.items[pos];
    }
    else
    {
      throw new Error("Out Of Bounds");
    }
  }

  max() 
  {
    if(this.length === 0) throw new Error("Empty SortedList");

    return Math.max(...this.items);
  }

  min() 
  {
    if(this.length === 0) throw new Error("Empty SortedList");

    return Math.min(...this.items);
  }

  sum() 
  {
    return this.items.reduce((acc, e) => acc + e, 0);
  }

  avg() 
  {
    if(this.length === 0) throw new Error("EmptySortedList");
    return this.sum() / this.length;
  }
}

module.exports = SortedList;
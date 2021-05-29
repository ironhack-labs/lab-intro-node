class SortedList 
{
  constructor() 
  {
    this.items=[]
    this.length=this.items.length
  }

  add(x) 
  {
    this.items.push(x)
    this.items.sort((a,b)=>a-b)
    this.length=this.items.length
    
  }

  get(pos) 
  {
    
    if (pos>this.items.length)
    {
      throw new Error('OutOfBounds');
    }
    else
    {
      return this.pos=this.items[pos]
    }
  }

  max()
  {
    
    if (!this.items.length)
    {
      throw new Error('EmptySortedList');
    }
    else
    {
      return Math.max(...this.items);
    }
  }

  min() 
  {
    if (!this.items.length)
    {
      throw new Error('EmptySortedList');
    }
    else
    {
      return Math.min(...this.items);
    }

  }

  sum() 
  {
    if(!this.items.length)
    {
      return 0
    }
    else
    {
      let temp=this.items.reduce((a,b)=>a+b,0)
      return temp
    }
    
  }

  avg() 
  {
    
    if(!this.items.length)
    {
      throw new Error('EmptySortedList');
    }
    else
    {
      return this.sum()/this.length
    }
  }
}



module.exports = SortedList;

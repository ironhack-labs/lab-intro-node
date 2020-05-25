class SortedList {
  constructor(...args) {
    this.items = [...args]
    this.length = args.length
  }

  add(item) {
    this.items.push(item)
    this.sort()
    this.length++
  }

  get(pos) {
    if(pos < 0 || pos >= this.length){
      throw Error('OutOfBonds')
    }
    return this.items[pos]
  }

  max() {
    if(this.length === 0) throw Error('EmptySortedList')
    return [...this.items].pop()
  }

  min() {
    if(this.length === 0) throw Error('EmptySortedList')
    return [...this.items].shift()
  }

  sum() {
    return this.items.reduce( (acc, elem) => acc + elem, 0)
  }

  avg() {
    if(this.length === 0) throw Error('EmptySortedList')
    return this.items.reduce( (acc, elem) => acc+elem, 0)/this.length
  }

  sort() {
    this.items.sort((a,b) => a-b)
  }
}

module.exports = SortedList;

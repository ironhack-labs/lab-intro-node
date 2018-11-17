var SortedList = function() {
    this.items = []
    this.length= this.items.length
}

const sorted = new SortedList()

SortedList.prototype.add = function(item){
    this.items.push(item)
    this.length++
    this.items.sort( (a, b) => {
        return a - b
    })
}

SortedList.prototype.get = function(index){
  return this.items[index-1]
}

SortedList.prototype.max = function(){
  if(this.items.length>0) {
      return Math.max.apply(null, this.items)
  }else{

  }
}

SortedList.prototype.min = function(){
  if(this.items.length>0) {
      return Math.min.apply(null, this.items)
  }else{

  }
}

SortedList.prototype.average = function (){
  if(this.items.length>0) {
      return (this.items.reduce(function (acc, element) {
          return acc + element
      })) / this.items.length
  }else{

  }
}
SortedList.prototype.sum = function(){
  if(this.items.length>0) {
      return this.items.reduce(function (acc, element) {
          return acc + element
      })
  }else {

  }
}
 /* get(pos) {}
  max() {}
  min() {}
  average() {}
  sum() {}
};
*/
module.exports = SortedList;

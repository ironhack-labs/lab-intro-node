const arr = [2, 5, 7] 
arr.push(6);
arr.sort((a,b)=>a-b)
console.log(Math.max(...arr));

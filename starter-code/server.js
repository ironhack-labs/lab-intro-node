const http = require("http"); //  require: load a module
const List = require("./index"); // index.js

// define list + new function
const ls = new List;
const writelist = (res) => res.write(`\n --> list = [${ls.items}]`)

// server
const server = http.createServer((req, res) => {  // create server
  console.log(req.url);
  let reg = /([^/]+$)/g; // after last "/"
  let value = parseInt(req.url.match(reg)); // parseint, otherwise interpreted as string values

  if (req.url == "/stats") { // stats 
    // when no items are set 
    if (ls.length == 0) {
      res.write("First add items by visiting /add/number"); 
    // if items were added
    } else {
      res.write("STATISTICS\n\n");
      res.write(`Length = ${ls.length}\n`);
      res.write(`Max = ${ls.max()}\n`);
      res.write(`Min = ${ls.min()}\n`);
      res.write(`Average = ${ls.average()}\n`);
      res.write(`Sum = ${ls.sum()}\n`);
      writelist(res);
    }
  } else if (req.url.includes("/add/")) { // add/x
    res.write(`Value added = ${value}\n`);
    ls.add(value);
    writelist(res);
  } else if (req.url.includes("/get/")) { // get/x
    res.write(`Value at ${value} = ${ls.get(value)}\n`);
  } else { // 404
    res.statusCode = 404;
    res.write("Not found"); 
  };
  res.end();
});

console.log("Started listening...")
server.listen(3000); // listen on port 3000
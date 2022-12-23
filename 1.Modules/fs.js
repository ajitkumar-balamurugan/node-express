const fs = require("fs");

const first = fs.readFileSync("./content/first.txt", "utf-8");

console.log(first);

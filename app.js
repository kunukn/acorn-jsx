// https://astexplorer.net/
// https://facebook.github.io/jsx/
// https://hackernoon.com/babel-your-first-code-transformations-2d1a9a2f3bc4
// https://babeljs.io/docs/en/babel-parser

var acorn = require("acorn");
var jsx = require("./index");
const fs = require("fs");
const parser = require("@babel/parser").parse;
const traverse = require("@babel/traverse").default;
const generate = require("@babel/generator").default;
const prettier = require("prettier");

const file = fs.readFileSync("./files/Component1.jsx").toString();

let result = acorn.Parser.extend(jsx()).parse(file);
let str = JSON.stringify(result, null, 2);

console.log(str);

fs.writeFile("./out/Component1", str, err => {
  if (err) throw new Error(err);
});

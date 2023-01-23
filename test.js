// var astring = require('astring');
var generator = require('./astring-jsx');
var astring = require('astring');
var acorn = require("acorn");
var jsx = require("acorn-jsx");
var walk = require('estree-walker').walk;

let code = `let x = (id,name) =>
  <div>
    <p>hello {name}</p>
    <div id={id}></div>
  </div>;`

// let code = "my(<jsx/>, 'code');"
// let code = 'let x = 10;';
let ast = acorn.Parser.extend(jsx()).parse(code,{ ecmaVersion: 6, plugins: { jsx: true } });

// let out = '';
// walk(ast, {
//     enter(node, parent, prop, index) {
//         if (node.type!='JSXElement')
//         console.log('enter',node);
//         out += 'hello';
//       // some code happens
//     },
//     leave(node, parent, prop, index) {
//       // some code happens
//     }
//   });

// console.log(out);

var formattedCode = astring.generate(ast, { generator });

// console.log(JSON.stringify(ast, null, 4));

console.log()
console.log(code);
console.log();
console.log(formattedCode);
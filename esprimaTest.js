var esprima = require('esprima');
var estraverse = require('estraverse');
var codegen = require('escodegen');
var recursive = require('esrecurse');

var ast = esprima.parse('if(x){ f();} else g();');
estraverse.replace(ast, {
    enter: function (node, parent) {
        console.log('enter function ' + node.type);
        if(node.type == 'Literal'){
            node.value = 55;
            node.raw = "55";
            return node;
        }
        //console.log(node);
    },
    leave: function (node, parent) {
        console.log('leave function '+ node.type);
        if (node.type == 'Identifier' && node.name === 'y') {
            node.name = 'foo';
            return node;
        }
        //console.log(node.value);
    }
});
console.log(JSON.stringify(ast, null, 4));
//console.log(codegen.generate(ast));

/**
 *
 * Created by b_sayed on 15-09-20.
 */

/*jslint bitwise:true */
/*global module:true, require:true*/
(function () {
    'use strict';

    var b, Syntax, common, modified;


    common = require('../common');
    Syntax = common.Syntax;
    b = common.astBuilder;


    function instrumentFuncDeclStatement(node, idx, scope) {

        if (node.instrumented)
            return;

        if (node.parentNode.type === Syntax.BlockStatement ||
            node.parentNode.type === Syntax.Program) {
            var cs = common.getCurrentScopeExpr(scope, [node.id.name]);
            var properties = [b.property("init", b.identifier("$fscope"), common.getPCDotL()),
                b.property("init", b.identifier("prototype"),
                    b.objectExpression([b.property("init", b.identifier("Σ"), common.getPCDotL())])),
                b.property("init", b.identifier("Σ"), common.getPCDotL())];

            //var paramNames = [];
            for (var i = 0; i < node.params.length; i++) {
                //paramNames.push(node.params[i].name);
                properties.push(
                    b.property("init", b.identifier(node.params[i].name),
                        common.getPCDotL()));
            }

            // The key is the full path function name, and the value is
            // the parameter names.
            //common.Map[''+scope.concat(node.id.name)] = paramNames;

            var objectExpr = b.objectExpression(properties);
            var assignStmt = b.assignmentStatement("=", cs, objectExpr);

            node.parentNode.body.splice(idx + 1, 0, assignStmt);
        }
        // Labeling node as instrumented so that we don't instrument it twice.
        node.instrumented = true;
    }

    module.exports = instrumentFuncDeclStatement;

}());
/* vim: set sw=4 ts=4 et tw=80 : */


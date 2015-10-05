/**
 *
 * Created by b_sayed on 15-09-20.
 */

/*jslint bitwise:true */
/*global module:true, require:true*/
(function () {
    'use strict';

    var b, Syntax, common;


    common = require('../common');
    Syntax = common.Syntax;
    b = common.astBuilder;


    function collectFuncExprStatement(node, idx, scope) {

        var funcName = [];
        if (node.parentNode.type !== Syntax.AssignmentExpression)
            throw new Error("Parent Node of function expression must be Assignment Expression");
        if (node.parentNode.left.type === Syntax.Identifier) {
            funcName.push(node.parentNode.left.name);
        } else if (node.parentNode.left.type === Syntax.MemberExpression) {
            funcName.push(node.parentNode.left.object.name || 'this');
            funcName.push(node.parentNode.left.property.name);
        }

        var paramNames = [];
        for (var i = 0; i < node.params.length; i++) {
            paramNames.push(node.params[i].name);
        }

        // The key is the full path function name, and the value is
        // the parameter names.
        common.Map[''+scope.concat(funcName)] = paramNames;
        //console.log(common.Map)


    }

    module.exports = collectFuncExprStatement;

}());
/* vim: set sw=4 ts=4 et tw=80 : */


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


    function instrumentAssignmentExprStatement(node, idx, scope) {

        if (node.instrumented)
            return;

        // We handle call and new expression in a separate way
        if (node.right.type === Syntax.CallExpression || node.right.type === Syntax.NewExpression)
            return;

        var lhsName = [];
        if (node.parentNode.parentNode.type !== Syntax.BlockStatement &&
            node.parentNode.parentNode.type !== Syntax.Program)
            throw new Error("Parent Node of Assignment expression must be Block or Program statement");

        if (node.left.type === Syntax.Identifier) {
            lhsName.push(node.left.name);
        } else if (node.left.type === Syntax.MemberExpression) {
            lhsName.push(node.left.object.name);
            lhsName.push(node.left.property.name);
        }

        var pcDotL = common.getPCDotL();
        var cs = common.getCurrentScopeExpr(scope);

        var secLvlExpr = common.getSecLvlCallExpr([node.right]);
        var firstAssig;

        var lhsVar;
        if (node.left.type === Syntax.Identifier) {
            lhsVar = common.getFindVarInScopeChainExpr(cs, lhsName[0], null, b.literal(true));
        } else if (node.left.type === Syntax.MemberExpression) {
            lhsVar = common.getFindVarInScopeChainExpr(cs, lhsName[0], lhsName[1], b.literal(false));
        }
        firstAssig = b.assignmentStatement("=", lhsVar,secLvlExpr);
        var rxSigma = b.memberExpression(lhsVar, b.identifier("Σ"), false);
        var conseq = b.assignmentExpression("=", rxSigma,
            common.getLubFuncCallExprWithArgsArray([rxSigma, pcDotL]));
        var alternate = b.assignmentExpression("=", lhsVar,
            common.getLubFuncCallExprWithArgsArray([lhsVar, pcDotL]));
        var condStmt = common.getIsObjCondExprStmt(lhsVar, conseq, alternate);


        // 1st parentNode must be assignment stmt, 2nd must be an expression stmt, then a
        // block stmt.
        node.parentNode.parentNode.body.splice(
            node.parentNode.idx + 1, 0, condStmt);


        node.parentNode.parentNode.body.splice(
            node.parentNode.idx + 1, 0, firstAssig);


        // Labeling node as instrumented so that we don't instrument it twice.
        node.instrumented = true;
    }

    module.exports = instrumentAssignmentExprStatement;

}());
/* vim: set sw=4 ts=4 et tw=80 : */


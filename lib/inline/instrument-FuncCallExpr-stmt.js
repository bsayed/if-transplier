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


    function instrumentFuncCallExprStatement(node, idx, scope) {

        if (node.instrumented)
            return;
        var lhsName = [];
        if (node.parentNode.type !== Syntax.AssignmentExpression)
            throw new Error("Parent Node of function expression must be Assignment Expression");
        if (node.parentNode.left.type === Syntax.Identifier) {
            lhsName.push(node.parentNode.left.name);
        } else if (node.parentNode.left.type === Syntax.MemberExpression) {
            lhsName.push(node.parentNode.left.object.name);
            lhsName.push(node.parentNode.left.property.name);
        }

        var rhsName = [];
        var callee = node.callee, isMethodCall = false;

        if (callee.type === Syntax.Identifier) {
            rhsName.push(callee.name);
        } else if (callee.type === Syntax.MemberExpression) {
            isMethodCall = true;
            rhsName.push(callee.object.name);
            rhsName.push(callee.property.name);
        }

        var pcDotL = common.getPCDotL();
        var cs = common.getCurrentScopeExpr(scope);
        var firstAssig;
        if (!isMethodCall)
            firstAssig = b.assignmentStatement("=", b.identifier("$rf"),
                common.getFindVarInScopeChainExpr(cs, rhsName[0]));
        else
            firstAssig = b.assignmentStatement("=", b.identifier("$rf"),
                common.getFindPropInProtoChainExpr(rhsName[0], rhsName[1], cs));

        var secondAssig = b.assignmentStatement("=",
            b.memberExpression(b.identifier("$rf"), b.identifier("scope"), false), cs);

        var thirdAssig;
        if (!isMethodCall && node.type !== Syntax.NewExpression)
            thirdAssig = b.assignmentStatement("=",
                b.memberExpression(b.identifier("$rf"), b.identifier("this"), false),
                b.memberExpression(b.identifier("$Γ"), b.literal('global'), true));
        else if (node.type === Syntax.NewExpression) {
            var newObj = b.objectExpression([b.property("init", b.identifier("Σ"), pcDotL),
                b.property("init", b.identifier("__proto__"), b.memberExpression(b.identifier("$rf"),
                    b.identifier("prototype")))]);
            thirdAssig = b.assignmentStatement("=",
                b.memberExpression(b.identifier("$rf"), b.identifier("this"), false),
                b.assignmentExpression("=", common.getFindVarInScopeChainExpr(cs, rhsName[0]), newObj));
        } else {
            thirdAssig = b.assignmentStatement("=",
                b.memberExpression(b.identifier("$rf"), b.identifier("this"), false),
                common.getFindVarInScopeChainExpr(cs, rhsName[0]));
        }


        var params = common.Map['' + scope.concat(rhsName)];
        if (!params)
            throw new Error("Error function \"" + rhsName + "\" has not been defined.");
        var argsStmts = [], lhs, rhs;
        for (var i = 0; i < params.length; i++) {
            lhs = b.memberExpression(b.identifier("$rf"), b.literal(params[i]), true);
            if (node.arguments[i])
                rhs = common.getLubFuncCallExprWithArgsArray(
                    [common.getSecLvlCallExpr([node.arguments[i]]), pcDotL]);
            else
                rhs = pcDotL;
            argsStmts.push(b.assignmentStatement("=", lhs, rhs));
        }

        var pushedLub;
        pushedLub = common.getLubFuncCallExprWithArgsArray([
            b.memberExpression(b.identifier("$rf"), b.identifier("$fscope"), false),
            pcDotL, b.memberExpression(b.identifier("$rf"), b.identifier("Σ"), false)
        ]);
        var pushedObj = b.objectExpression([b.property("init", b.identifier("l"), pushedLub),
            b.property("init", b.identifier("id"), b.literal("FUNC"))]);

        var pushStmt = common.getLambdaPushCallExprWithArg(pushedObj);

        var lhsVar;
        if (node.parentNode.left.type === Syntax.Identifier) {
            lhsVar = common.getFindVarInScopeChainExpr(cs, lhsName[0], null, b.literal(true));
        } else if (node.parentNode.left.type === Syntax.MemberExpression) {
            lhsVar = common.getFindVarInScopeChainExpr(cs, lhsName[0], lhsName[1], b.literal(false));
        }
        //var fourthAssig = b.assignmentStatement("=", b.identifier("$rx"), lhsVar);
        var fifthAssig = b.assignmentStatement("=", lhsVar,
            common.getLambdaPopCallDotLExpr());

        var rxSigma = b.memberExpression(lhsVar, b.identifier("Σ"), false);
        var conseq = b.assignmentExpression("=", rxSigma,
            common.getLubFuncCallExprWithArgsArray([rxSigma, pcDotL]));
        var alternate = b.assignmentExpression("=", lhsVar,
            common.getLubFuncCallExprWithArgsArray([lhsVar, pcDotL]));
        var condStmt = common.getIsObjCondExprStmt(lhsVar, conseq, alternate);

        var invokedAsConstrStmt;
        if (node.type === Syntax.NewExpression) {
            invokedAsConstrStmt = b.assignmentStatement("=",
                b.memberExpression(b.identifier("$rf"), b.identifier("InvokedAsContr"), false),
                b.literal(true));
        }


        // 1st parentNode must be assignment stmt, 2nd must be an expression stmt, then a
        // block stmt.
        node.parentNode.parentNode.parentNode.body.splice(
            node.parentNode.parentNode.idx + 1, 0, condStmt);

        node.parentNode.parentNode.parentNode.body.splice(
            node.parentNode.parentNode.idx + 1, 0, fifthAssig);

        //node.parentNode.parentNode.parentNode.body.splice(
        //    node.parentNode.parentNode.idx + 1, 0, fourthAssig);

        node.parentNode.parentNode.parentNode.body.splice(
            node.parentNode.parentNode.idx, 0, pushStmt);

        if (node.type === Syntax.NewExpression) {
            node.parentNode.parentNode.parentNode.body.splice(
                node.parentNode.parentNode.idx, 0, invokedAsConstrStmt);
        }

        for (i = argsStmts.length - 1; i >= 0; i--)
            node.parentNode.parentNode.parentNode.body.splice(
                node.parentNode.parentNode.idx, 0, argsStmts[i]);

        node.parentNode.parentNode.parentNode.body.splice(
            node.parentNode.parentNode.idx, 0, thirdAssig);

        node.parentNode.parentNode.parentNode.body.splice(
            node.parentNode.parentNode.idx, 0, secondAssig);

        node.parentNode.parentNode.parentNode.body.splice(
            node.parentNode.parentNode.idx, 0, firstAssig);


        // Labeling node as instrumented so that we don't instrument it twice.
        node.instrumented = true;
    }

    module.exports = instrumentFuncCallExprStatement;

}());
/* vim: set sw=4 ts=4 et tw=80 : */


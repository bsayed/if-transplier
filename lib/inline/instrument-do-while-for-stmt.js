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


    function instrumentWhileStmt(node, idx, scope) {
        var result;

        if (node.instrumented)
            return;

        //console.log(scope);
        //$Γ

        if (node.parentNode.type === Syntax.BlockStatement
            || node.parentNode.type === Syntax.Program) {

            var xs = common.$collect(node.body);

            var shouldCompensate = common.checkCompensation(node.body, node);
            var cs = common.getCurrentScopeExpr(scope);
            var pcDotL = common.getPCDotL();
            var lubExpr = common.getLubFuncCallExpr(pcDotL,
                common.getSecLvlCallExpr([node.test, b.literal(true)]));
            var pushExprStmt = common.getLambdaPushCallExprWithArg(b.objectExpression([
                b.property("init", b.identifier("l"), lubExpr),
                b.property("init", b.identifier("id"), b.literal("LOOP"))]));

            var shouldCompDecl, arrayExpression, upgradeExprStmt,deltaPushExprStmt;

            if (shouldCompensate) {
                shouldCompDecl = b.variableDeclaration("var", [
                    b.variableDeclarator(
                        b.identifier("$shouldComp"),
                        b.objectExpression([b.property("init", b.literal("lbl"),
                            b.literal(shouldCompensateInConsequent.lbl))])
                    )
                ]);
                node.body.push(shouldCompDecl);
            }

            var shouldCompIfStmt = b.ifStatement(b.identifier("$shouldComp"),
                common.getCompensateCallExpr(b.memberExpression(b.identifier("$shouldComp"),
                    b.identifier("lbl"), false)));

            shouldCompIfStmt.instrumented = true;
            node.parentNode.body.splice(idx + 1, 0, common.getLambdaPopCallExpr());
            node.parentNode.body.splice(idx + 1, 0, shouldCompIfStmt);
            // if we collected anything in the body of the loop, add an upgrade call in
            // the body.
            if (xs.length > 0) {
                arrayExpression = b.arrayExpression(xs);
                upgradeExprStmt = common.getUpgradeCallExpr(arrayExpression, pcDotL, cs);
                node.parentNode.body.splice(idx + 1, 0, upgradeExprStmt);
            }
            node.parentNode.body.splice(idx, 0, pushExprStmt);

        }
        // Labeling node as instrumented so that we don't instrument it twice.
        node.instrumented = true;

        return {
            result: result,
            modified: modified
        };
    }

    module.exports = instrumentWhileStmt;

}());
/* vim: set sw=4 ts=4 et tw=80 : */

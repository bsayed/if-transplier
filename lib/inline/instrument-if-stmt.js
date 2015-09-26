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


        function instrumentIfStmt(node, idx, scope) {
            var result;

            if (node.instrumented)
                return;

            //console.log(scope);
            //$Γ

            if (node.parentNode.type === Syntax.BlockStatement
                || node.parentNode.type === Syntax.Program) {

                var xs = common.$collect(node.consequent);
                var ys = common.$collect(node.alternate);

                var shouldCompensateInConsequent = common.checkCompensation(node.consequent, node);
                var shouldCompensateInAlternate = common.checkCompensation(node.alternate, node);
                var cs = common.getCurrentScopeExpr(scope);
                var pcDotL = b.memberExpression(b.identifier("$pc"), b.identifier("l"), false);
                var lubExpr = common.getLubFuncCallExpr(pcDotL,
                    b.callExpression(b.identifier("sec_lvl"), [node.test, b.literal(true)]));
                var pushExprStmt = common.getLambdaPushCallExprWithArg(b.objectExpression([
                    b.property("init", b.identifier("l"), lubExpr),
                    b.property("init", b.identifier("id"), b.literal("IF"))]));

                var shouldCompDecl,arrayExpression,upgradeExprStmt;

                // if we collected anything in alternate, add an upgrade call in
                // consequent body.
                if (ys.length > 0) {
                    arrayExpression = b.arrayExpression(ys);
                    upgradeExprStmt = common.getUpgradeCallExpr(arrayExpression, pcDotL, cs);
                    node.consequent.body.splice(0, 0, upgradeExprStmt);
                }
                // if we collected anything in consequent, add an upgrade call in
                // alternate body.
                if (xs.length > 0) {
                    arrayExpression = b.arrayExpression(xs);
                    upgradeExprStmt = common.getUpgradeCallExpr(arrayExpression, pcDotL, cs);
                    node.alternate.body.splice(0, 0, upgradeExprStmt);
                }

                if (shouldCompensateInConsequent) {
                    shouldCompDecl = b.variableDeclaration("var", [
                        b.variableDeclarator(
                            b.identifier("$shouldComp"),
                            b.objectExpression([b.property("init", b.literal("lbl"),
                                b.literal(shouldCompensateInConsequent.lbl))])
                        )
                    ]);
                    node.consequent.body.push(shouldCompDecl);
                }

                if(shouldCompensateInAlternate) {
                    shouldCompDecl = b.variableDeclaration("var", [
                        b.variableDeclarator(
                            b.identifier("$shouldComp"),
                            b.objectExpression([b.property("init", b.literal("lbl"),
                                b.literal(shouldCompensateInAlternate.lbl))])
                        )
                    ]);
                    node.alternate.body.push(shouldCompDecl);
                }

                var shouldCompIfStmt = b.ifStatement(b.identifier("$shouldComp"),
                common.getCompensateCallExpr(b.memberExpression(b.identifier("$shouldComp"),
                    b.identifier("lbl"),false)));

                node.parentNode.body.splice(idx + 1, 0, common.getLambdaPopCallExpr());
                node.parentNode.body.splice(idx + 1, 0, shouldCompIfStmt);
                node.parentNode.body.splice(idx, 0, pushExprStmt);

                //console.log(xs);
                //console.log(ys);
                //console.log(shouldCompensateInConsequent);
                //console.log(shouldCompensateInAlternate);


                //var test = b.memberExpression(cs, b.identifier("InvokedAsContr"), false);
                //var sigmaExpr = b.memberExpression(
                //    b.memberExpression(cs, b.identifier('this'), false), b.identifier("Σ"), false);
                //
                //var oldPCDotL = b.memberExpression(b.identifier("$old_pc"), b.identifier("l"), false);
                //
                //var sigmaAssignStmt = b.assignmentStatement("=", sigmaExpr,
                //    common.getLubFuncCallExpr(sigmaExpr, oldPCDotL));
                //
                //var objectExpr = b.objectExpression([b.property("init", b.literal("l"),
                //    b.memberExpression(cs, b.identifier("this"), false))]);
                //var objectExprForElseStmt = b.objectExpression([b.property("init", b.literal("l"),
                //    b.memberExpression(b.identifier("$old_pc"), b.identifier("l"), false))]);
                //
                //var lambdaAssignStmt = b.assignmentStatement("=", lambdaStackMinusOne, objectExpr);
                //
                //var lambdaAssignElseStmt = b.assignmentStatement("=", lambdaStackMinusOne, objectExprForElseStmt);
                //
                //var ifStmt, scopeStmt;
                //ifStmt = b.ifStatement(test,
                //    b.blockStatement([sigmaAssignStmt, lambdaAssignStmt]),
                //    b.blockStatement([lambdaAssignElseStmt]));
                //
                //if (node.argument && node.argument.type === Syntax.Identifier) {
                //    scopeStmt = b.assignmentStatement("=", b.identifier("$rx"),
                //        b.memberExpression(
                //            b.callExpression(b.identifier("$scope"), [cs, b.literal(node.argument.name)])
                //            , b.literal(node.argument.name), true));
                //    test = b.binaryExpression("instanceof", b.identifier("$rx"), b.identifier("Object"));
                //    sigmaExpr = b.memberExpression(b.identifier('$rx'), b.identifier("Σ"), false);
                //    sigmaAssignStmt = b.assignmentStatement("=", sigmaExpr,
                //        common.getLubFuncCallExpr(sigmaExpr, oldPCDotL));
                //    objectExpr = b.objectExpression([b.property("init", b.literal("l"), b.identifier("$rx"))]);
                //    lambdaAssignStmt = b.assignmentStatement("=", lambdaStackMinusOne,objectExpr);
                //    ifStmt = b.ifStatement(test, b.blockStatement([sigmaAssignStmt,lambdaAssignStmt]),
                //        b.blockStatement([ifStmt]));
                //} else if (node.argument && node.argument.type !== Syntax.Identifier) {
                //    throw new
                //        Error("Return Stmt argument must be an identifier or null.");
                //}
                //
                //// Labeling additional statements as instrumented
                //ifStmt.instrumented = whileLoop.instrumented = oldPCStmt.instrumented = true;
                //pnode.body.splice(idx, 0, ifStmt);
                //if(node.argument && node.argument.type === Syntax.Identifier) {
                //    pnode.body.splice(idx, 0, scopeStmt);
                //}
                //pnode.body.splice(idx, 0, whileLoop);
                //pnode.body.splice(idx, 0, oldPCStmt);
            }
            // Labeling node as instrumented so that we don't instrument it twice.
            node.instrumented = true;

            return {
                result: result,
                modified: modified
            };
        }

        module.exports = instrumentIfStmt;

    }

    ()
)
;
/* vim: set sw=4 ts=4 et tw=80 : */


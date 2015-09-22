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


    function instrumentReturnStatement(node) {
        var result;

        console.log('This is a return statement');
        //var statements = node.body;
        //var firstDeclStmt = null;
        //for (var i = 0; i < statements.length; i++) {
        //    var stmt = statements[i];
        //    if (stmt.type === Syntax.VariableDeclaration) {
        //        // if the If-Stmt has no alternate add an empty blockstatement
        //        if (!firstDeclStmt) {
        //            firstDeclStmt = stmt;
        //        } else {
        //            firstDeclStmt.declarations.push(stmt.declarations[0]);
        //            statements.splice(i, 1);
        //            if (i >= 0)
        //                i--;
        //        }
        //    }
        //
        //}

        return {
            result: result,
            modified: modified
        };
    }

    module.exports = instrumentReturnStatement;

}());
/* vim: set sw=4 ts=4 et tw=80 : */


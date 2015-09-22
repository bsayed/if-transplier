/*
 Copyright (C) 2013 Yusuke Suzuki <utatane.tea@gmail.com>

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are met:

 * Redistributions of source code must retain the above copyright
 notice, this list of conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright
 notice, this list of conditions and the following disclaimer in the
 documentation and/or other materials provided with the distribution.

 THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 ARE DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
 DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
 THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

/*jslint bitwise:true */
/*global module:true, require:true*/
(function () {
    'use strict';

    var Name, Syntax, common, modified;

    Name = 'transform-anonymous-function';

    common = require('../common');
    Syntax = common.Syntax;

    function concatenateVariableDefinition(tree, options) {
        var result;

        result = options.get('destructive', {pathName: Name}) ? tree : common.deepCopy(tree);
        modified = false;

        common.traverse(result, {
            enter: function enter(node) {
                var statements, i, stmt;
                if (node.type === Syntax.Program || node.type === Syntax.BlockStatement) {
                    statements = node.body;
                    for (i = 0; i < statements.length; i++) {
                        stmt = statements[i];
                        switch (stmt.type) {
                            case Syntax.IfStatement:
                            case Syntax.WhileStatement:
                            case Syntax.DoWhileStatement:
                                if (stmt.test.type !== Syntax.Identifier) {
                                    // Get a new tmp variable
                                    var tmpId = common.getTempVar();
                                    // Tmp variable
                                    var tmpVar = {type:Syntax.Identifier,name:tmpId};
                                    // Create new Variable Declaration statement
                                    var newVarDeclStmt = {type: Syntax.VariableDeclaration,
                                    declarations: [{type:Syntax.VariableDeclarator,
                                        id:tmpVar, init: stmt.test }],
                                        kind: 'var'
                                    };
                                    stmt.test = tmpVar;
                                    // Insert the new variable declaration statement before
                                    // the current statement
                                    statements.splice(i,0,newVarDeclStmt);

                                    // Decrement the loop counter to force visiting the
                                    // new statement.
                                    i--;
                                }
                                break;
                        }
                    }

                }
            }
        });

        return {
            result: result,
            modified: modified
        };
    }

    concatenateVariableDefinition.passName = Name;
    module.exports = concatenateVariableDefinition;
}());
/* vim: set sw=4 ts=4 et tw=80 : */

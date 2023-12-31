/*
 Copyright (C) 2012-2013 Yusuke Suzuki <utatane.tea@gmail.com>

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
/*global exports:true*/

(function () {
    'use strict';

    var common,
        Options,
        Syntax,
        Pass,
        annotateDirective,
        esrecurse,
        esprima,
        escodegen;

    common = require('./common');
    Options = require('./options');
    Pass = require('./pass');
    annotateDirective = require('./annotate-directive');
    Syntax = common.Syntax;
    esrecurse = require('./esrecurse/esrecurse');
    esprima = require('esprima');
    escodegen = require('escodegen');


    // recover some broken AST

    function recover(tree, useDirectiveStatement) {
        function trailingIf(node) {
            while (true) {
                switch (node.type) {
                    case Syntax.IfStatement:
                        if (!node.alternate) {
                            return true;
                        }
                        node = node.alternate;
                        continue;

                    case Syntax.LabeledStatement:
                    case Syntax.ForStatement:
                    case Syntax.ForInStatement:
                    case Syntax.WhileStatement:
                    case Syntax.WithStatement:
                        node = node.body;
                        continue;
                }
                return false;
            }
        }

        common.traverse(tree, {
            leave: function leave(node) {
                if (node.type === Syntax.IfStatement && node.alternate) {
                    // force wrap up or not
                    if (node.consequent.type !== Syntax.BlockStatement) {
                        if (trailingIf(node.consequent)) {
                            node.consequent = {
                                type: Syntax.BlockStatement,
                                body: [node.consequent]
                            };
                        }
                    }
                }
                if (!useDirectiveStatement && node.type === Syntax.DirectiveStatement) {
                    node.type = Syntax.ExpressionStatement;
                    node.expression = common.moveLocation(node, {
                        type: Syntax.Literal,
                        value: node.value,
                        raw: node.raw
                    });
                    delete node.directive;
                    delete node.value;
                    delete node.raw;
                }
            }
        });

        return tree;
    }

    function iteration(tree, p, options) {
        var i, iz, pass, res, changed, statuses, passes, result;

        function addPass(pass) {
            var name;
            if (typeof pass !== 'function') {
                // automatic lookup pass (iFTranspily pass format)
                name = Object.keys(pass)[0];
                pass = pass[name];
            }
            if (pass.hasOwnProperty('passName')) {
                name = pass.passName;
            } else {
                name = pass.name;
            }
            passes.push(pass);
            statuses.push(true);
        }

        function fillStatuses(bool) {
            var i, iz;
            for (i = 0, iz = statuses.length; i < iz; ++i) {
                statuses[i] = bool;
            }
        }

        result = (options.get('destructive')) ? tree : common.deepCopy(tree);

        statuses = [];
        passes = [];


        for (i = 0, iz = p.length; i < iz; ++i) {
            addPass(p[i]);
        }

        do {
            changed = false;
            for (i = 0, iz = passes.length; i < iz; ++i) {
                pass = passes[i];
                if (statuses[i]) {
                    res = pass(result, options);
                    if (res.modified) {
                        changed = true;
                        fillStatuses(true);
                    } else {
                        statuses[i] = false;
                    }
                    result = res.result;
                }
            }
        } while (changed);

        return result;
    }


    function inline(tree, pipeline) {

        if (null == pipeline) {
            pipeline = Pass.__defaultPipeline.inline;
        }

        var obj = {FunctionDeclaration: require('./util/collect-FuncDecl-stmt'),
            FunctionExpression: require('./util/collect-FuncExpr-stmt'),
            Program: require('./util/collect-Program-Vars')};
        // collect parameters of any function call
        esrecurse.visit(tree,obj);

        // collect NewExpr calls
        obj = {NewExpression: require('./util/collect-NewExpr-Calls')};
        esrecurse.visit(tree,obj);

        //console.log(common.VarsInScopeMap)

        // instrument all kind of statements
        esrecurse.visit(tree,pipeline);

        //var newTree = esprima.parse(escodegen.generate(tree));


        return tree;
    }

    function transform(tree, pipeline, options) {
        tree = annotateDirective(tree, new Options({destructive: false}));

        if (null == pipeline) {
            pipeline = Pass.__defaultPipeline.transform;
        }

        options = new Options(options);

        tree = iteration(tree, pipeline, options);

        return recover(tree, options.get('directive'));
    }

    exports.version = require('../package.json').version;
    exports.transform = transform;
    exports.inline = inline;
    exports.pass = Pass;
}());
/* vim: set sw=4 ts=4 et tw=80 : */

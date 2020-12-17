(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('marked-ast')) :
    typeof define === 'function' && define.amd ? define(['marked-ast'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.marked));
}(this, (function (marked) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var marked__default = /*#__PURE__*/_interopDefaultLegacy(marked);

    const parseMarkAst = function (ast) {
        let str = '';
        for (let i = 0; i < ast.length; i++) {
            const curAst = ast[i];
            if (curAst.type === 'heading' || curAst.type === 'paragraph' || curAst.type === 'strong' || curAst.type === 'em') {
                if (curAst.text.length === 1) {
                    if (curAst.text !== '/n') {
                        if( typeof curAst.text[0] === 'string'){
                            str += curAst.text[0] ? curAst.text[0].trim() : '';
                        }
                    }
                } else {
                    for (let y = 0; y < curAst.text.length; y++) {
                        const yAst = curAst.text[y];
                        if (typeof yAst === 'object') {
                            str += yAst.text[0] ? yAst.text[0].trim() :'';
                        } else {
                            str += yAst ? yAst.trim() : '';
                        }
                    }
                }
            }
        }
        return str
    };

    function markdown2Summary(markdownContent,subLen) {
        if (markdownContent) {
            markdownContent = markdownContent.split('\n');
            const textArr = [];
            for (let i = 0; i < markdownContent.length; i++) {
                const text = markdownContent[i].trim();
                if (text) {
                    textArr.push(text);
                }
            }
            markdownContent = textArr.join('\n');
            const ast = marked__default['default'].parse(markdownContent.trim());
            const str = parseMarkAst(ast).slice(0, subLen);
            return str
        }
        return ''
    }


    module.exports = markdown2Summary;

})));
//# sourceMappingURL=index.js.map

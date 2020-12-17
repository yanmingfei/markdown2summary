import marked  from 'marked-ast';
const parseMarkAst = function (ast) {
    let str = ''
    for (let i = 0; i < ast.length; i++) {
        const curAst = ast[i]
        if (curAst.type === 'heading' || curAst.type === 'paragraph' || curAst.type === 'strong' || curAst.type === 'em') {
            if (curAst.text.length === 1) {
                if (curAst.text !== '/n') {
                    if( typeof curAst.text[0] === 'string'){
                        str += curAst.text[0] ? curAst.text[0].trim() : ''
                    }
                }
            } else {
                for (let y = 0; y < curAst.text.length; y++) {
                    const yAst = curAst.text[y]
                    if (typeof yAst === 'object') {
                        str += yAst.text[0] ? yAst.text[0].trim() :''
                    } else {
                        str += yAst ? yAst.trim() : ''
                    }
                }
            }
        }
    }
    return str
}

function markdown2Summary(markdownContent,subLen) {
    if (markdownContent) {
        markdownContent = markdownContent.split('\n')
        const textArr = []
        for (let i = 0; i < markdownContent.length; i++) {
            const text = markdownContent[i].trim()
            if (text) {
                textArr.push(text)
            }
        }
        markdownContent = textArr.join('\n')
        const ast = marked.parse(markdownContent.trim())
        const str = parseMarkAst(ast).slice(0, subLen)
        return str
    }
    return ''
}


module.exports = markdown2Summary
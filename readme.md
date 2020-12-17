# markdown2summary
根据`markdown`内容截取`摘要`。往常的方式基本都是通过markdown转换成为html，再通过正则来取出摘要，来防止取出无关的代码或者其它无关内容。

## 如何实现
是通过`markd-ast`将`markdown`内容转换成`ast`语法树（内容有大量的正则，可以将代码转换成js对象）。这样我们可以根据语法树的规则取出我们希望的内容。进行拼接，再进行截取形成summary即可。
## 用法
```
const markdown2summary = require('markdown2summary')
const summary = markdown2summary(markdown,200)
```  
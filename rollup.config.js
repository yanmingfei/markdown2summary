import babel from "rollup-plugin-babel";
import serve from "rollup-plugin-serve";

export default {
    input:'./src/index.js',
    output:{
        format:'umd',//模块化的类型
        name:"markdown2summary",// 打包的模块名称如vue、jquery
        file:'dist/index.js',//打包后的目录位置
        sourcemap:true
    },
    plugin:[
        babel({
            exclude:'node_modules/**'
        }),
        serve({
            open:true,//打开浏览器
            port:3000,
            contentBase:'',
            openPage:'/index.html'
        })
    ]
}

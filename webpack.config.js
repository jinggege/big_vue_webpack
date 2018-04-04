/* 引入操作路径模块和webpack */
var path    = require('path');
var webpack = require('webpack');

module.exports = {
    /* 输入文件 */
    entry:{
        main_h5      :'./src/js/h5/enter/main_h5.js',
        main_course  :'./src/js/h5/enter/course.js',
        enroll       :'./src/js/h5/enter/enroll.js',
        enroll_result:'./src/js/h5/enter/enroll_result.js',
        account      :'./src/js/h5/enter/account.js',
        userinfo      :'./src/js/h5/enter/userinfo.js',
        admin_index_pc :'./src/js/pc/enter/pc_ad_index.js',
        admin_login_pc :'./src/js/pc/enter/pc_ad_login.js',
        im_test :'./src/js/pc/enter/im_test.js'
    },
    output: {
        /* 输出目录，没有则新建 */
        //path: path.resolve(__dirname, './dist'),
        /* 静态目录，可以直接从这里取文件 */
       // publicPath: '/dist/',
        /* 文件名 */
       // filename: 'build.js'
       filename:'[name].js',
       path:__dirname+'/dist/'
    },
    module: {
        rules: [
            /* 用来解析vue后缀的文件 */
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            /* 用babel来解析js文件并把es6的语法转换成浏览器认识的语法 */
            {
                test: /\.js$/,
                loader: 'babel-loader',
                /* 排除模块安装目录的文件 */
                exclude: /node_modules/
            },

            /* 加载css */
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader',
                /* 排除模块安装目录的文件 */
                exclude: /node_modules/,
                /* 指定目录 */
                //include: __dirname + '/src/css'
            },
            {  //编译识别sass!
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
            }

        ]
    },


    /*
    plugins:[
        new webpack.optimize.UglifyJsPlugin({
            compress: {
              warnings: false
            }
        })
    ]
    */
    

    

    






}
//import
const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

//export
module.exports = {
    // 파일을 읽어들이기 시작하는 진입점 설정
    entry: './js/main.js',

    // 결과물(번들)을 반환하는 설정
    output: {
        // path: path.resolve(__dirname, 'dist'), // 절대경로를 적어줘야 함
        // filename: 'main.js', // 위 entry에 적어놓은 파일과 동일하게 적기
        clean: true // 기존에 만들었던 내용들을 지워주고 최종본만 남김
    },

    module: {
        rules: [
            {
                test: /\.s?css$/, // css로 끝나는 모든 것 찾기
                use: [
                    'style-loader', //  index.html에 스타일 태그를 삽입시켜 줌
                    'css-loader',    // 자바스크립트에선 scss 파일을 해석할 수 없어서 해당 패키지 사용
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                use:[
                    'babel-loader'
                ]
            }
        ]
    },

    //번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
    plugins: [
        new HtmlPlugin({
            template: "./index.html"
        }),
        new CopyPlugin({
            patterns: [
                {from: 'static'}
            ]
        })
    ],

    devServer: {
        host: 'localhost'
    }


}


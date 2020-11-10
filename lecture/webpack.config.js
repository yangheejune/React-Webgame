const path = require('path');

module.exports = {
    name: 'word-relay-setting',
    mode: 'development',        // 실서비스 : production
    devtool: 'eval',
    resolve: {
        extensions: ['.js', '.jsx']
    },

    entry: {
        app: ['./client' ],
    },  // 입력

    module: {
        rules: [{
            test: /\.jsx?/,
            loader: 'babel-loader',
            options: {
                presets: [ '@babel/preset-env', '@babel/preset-react' ],
                plugins: [ '@babel/plugin-proposal-class-properties' ],
            },
        }],
    },  // 모듈 적용

    output: {
        path: path.join(__dirname, 'dist'), // c:\현재폴더\dist
        filename: 'app.js'
    },  // 출력
};
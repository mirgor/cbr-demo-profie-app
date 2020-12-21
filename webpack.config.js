// Resolve Webpack alias in Webstorm (https://gist.github.com/zmts/bd620cd473e6c96e8884f03d0cee7f15)
module.exports = {
    resolve: {
        alias: {
            '@': require('path').resolve(__dirname, 'src')
        }
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    }
}

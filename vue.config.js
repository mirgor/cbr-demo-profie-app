// vue.config.js
module.exports = {
    runtimeCompiler: true,
    devServer: {
        proxy: {
            '^/api': {
                target: 'https://dev-main.davintoo.com',
                ws: true,
                changeOrigin: true
            }
        },
        watchOptions: {
            clientLogLevel: 'warning'
        }
    }
}

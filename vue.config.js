var path = require('path')
function resolve (dir) {
    console.log(__dirname)
    return path.join(__dirname, dir)
}
module.exports = {
    publicPath: './',
    chainWebpack: config => {
        config.resolve.alias
            //.set(key, value)  key,value自行定义，比如.set('@@', resolve('src/components'))
            .set('@', resolve('src'))
            .set('assets',resolve('src/assets'))
            .set('components',resolve('src/components'))
            .set('views',resolve('src/views'))
            .set('network',resolve('src/network'))

    }
}

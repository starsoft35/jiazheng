var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
    NODE_ENV: '"development"',
    API_HOST: '"https://game.ydd100.cn/home-api"',
    AUTO_INPUT_CAPTHA: 'true',
    WEIXIN: {
        API_HOST: '"https://game.ydd100.cn/weixin"',
        APP_ID: '"wx3d6e468dedb0b75e"',
        APP_SECRET: '"13c984dbac7190ca58ba7fade6ca4bdc"',
        REDIRECT_URI: '"https://game.ydd100.cn#/oauth"'
    }

})
# 配置
## api配置
tfshop API的基本配置文件是 `.env`
一个基础的配置文件是这样的,项目搭建后，可配置的参数后台也可以配置：
```
APP_NAME=tfshop
APP_ENV=local
APP_KEY=base64:1dBGpFr/ulFhwh1RxwFcLAEVNxAtcObcVoVrLliTY5c=
APP_DEBUG=true
TIMEZONE=Asia/Shanghai
APP_URL=http://tfshop.test
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=tfshop
DB_USERNAME=root
DB_PASSWORD=root
REDIS_HOST=127.0.0.1
REDIS_PORT=6379
REDIS_DB=1
REDIS_PASSWORD=
```
## 后台配置
tfshop 后台配置的基本配置文件是 `config\dev.env.js`，正式环境正是`config\prod.env.js`
一个基础的配置文件是这样的:
```js
module.exports = {
  NODE_ENV: '"development"',
  ENV_CONFIG: '"dev"',
  SITE_NAME: '"TFSHOP电商商城"',
  BASE_API: '"http://tfshop.test/api/v1/admin/"',
  H5_URL: '"http://tfshop.test/h5/#/"',
  BASE_HTTP: '"http://tfshop.test"'
}
```
## uniapp配置
tfshop 后台配置的基本配置文件是 `utils\config.js`
一个基础的配置文件是这样的:
```js
const domainName = 'http://tfshop.test'
configURL = {
    lbsQq: 'lbs_qq_key',
    DomainName: domainName,
    BaseURL: domainName +INTERFACE,
    secret: 'base64:szoJ3mSx/5U7zOsJfU7s4pSahiwdh01x6badmz5FtCM='
}
applyDsshopNodeEnv = 'test'
```
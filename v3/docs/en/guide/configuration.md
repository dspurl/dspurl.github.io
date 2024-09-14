# Configuration
## Profile API
The basic configuration file for the tfshop API is`.env`
A basic configuration file is like this, after the project is built, configurable parameters can also be configured in the background:
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
## Background configuration
The basic configuration file of tfshop background configuration is`config\dev.env.js`, and the formal environment is`config\prod.env.js`
A basic configuration file looks like this:
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
## uniapp configuration
The basic configuration file of tfshop background configuration is`utils\config.js`
A basic configuration file looks like this:
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
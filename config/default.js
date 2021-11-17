const dotenv = require('dotenv')
dotenv.config()

module.exports = {
    tz: 'Asia/Ho_Chi_Minh',
    secret: 'my-secret',
    port: 3333,
    domain: 'http://localhost:3333',

    next: {
        enable: true,
        devMode: true,
    },
}

const express = require('express')
const config = require('config')
const next = require('next')
require('dotenv').config()

const app = express()

// setup nextjs
if (config.get('next.enable')) {
    const nextApp = next({ dev: config.get('next.devMode'), dir: './next' })
    const handle = nextApp.getRequestHandler()
    nextApp
        .prepare()
        .then(() => {
            console.log('Next App Initialized!')
            app.get('*', (req, res) => handle(req, res))
        })
        .catch((err) => {
            console.log('Start Frontend Error', err)
        })
}
app.listen(config.get('port'))

'use strict'

import express from 'express'
import bodyParser from 'body-parser'

const app = express()
app.use(bodyParser.json())


app.listen(process.env.PORT || 3000, () => console.log(`Listening on port ${process.env.PORT}`))

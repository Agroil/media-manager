require('dotenv').config()
import {startServer} from './server/web'

startServer().catch((err) => {
    console.error(err)
})

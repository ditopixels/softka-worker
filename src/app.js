import express from 'express'
import morgan from 'morgan'
import path from 'path'
import { config } from './config.js'

import {graphqlHTTP} from 'express-graphql'
import schema from './schema.js'

import cors from 'cors'

/***APP***/
const app = express();

app.use(cors())

app.set('port', config.PORT)
app.use(morgan('dev'));


// Static files

//app.use(express.static(path.join(__dirname, 'public')))

//Middlewares
//app.use(express.json())
//app.use(express.urlencoded({ extended: true }))


app.use('/graphql',graphqlHTTP({
    graphiql: true,
    schema
}))



export default app
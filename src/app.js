import express from 'express'
import morgan from 'morgan'
import path from 'path'
import { config } from './config.js'

import {graphqlHTTP} from 'express-graphql'
import schema from './schema.js'

import cors from 'cors'

//Routes
import indexRoutes from './routes/index.routes.js'
import signRoutes from './routes/sign.routes.js'
import dashboardRoutes from './routes/dashboard.routes.js'

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

// Routes
app.use(indexRoutes);
app.use(signRoutes);
app.use(dashboardRoutes);



export default app
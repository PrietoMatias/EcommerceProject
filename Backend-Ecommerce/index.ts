import express, {Express} from 'express'
import routerUser from './src/routers/routerUser'
import routerProducts from './src/routers/routerProducts'
import routerAdmin from './src/routers/routerAdmin'
import routerSupplier from './src/routers/routerSupplier'
import routerOrder from './src/routers/routerOrder'
import routerReview from './src/routers/routerReview'
import routerInventory from './src/routers/routerInventory'
import routerCart from './src/routers/routerCart'
import connection from './src/services/database'
import session from 'express-session'
import bodyParser from 'body-parser'
import dotenv from 'dotenv';
import { generateSecret } from './src/utils/secret';
import cookieParser from 'cookie-parser'

const startServer = async ():Promise<void>=>{
    await connection()

    dotenv.config()
    const sessionSecret = process.env.SESSION_SECRET || generateSecret()

    const app:Express = express();
    app.use(express.json())
    app.use(cookieParser())
    app.use(session({
    secret: sessionSecret,
    resave: false,
    saveUninitialized: false
    }))
    app.use(bodyParser.urlencoded({extended: true}))
    app.use('/api', routerUser)
    app.use('/api', routerProducts)
    app.use('/api', routerAdmin)
    app.use('/api', routerCart)
    app.use('/api', routerOrder)
    app.use('/api', routerInventory)
    app.use('/api', routerSupplier)
    app.use('/api', routerReview)
    
    app.listen(3000, ()=>{
        console.log('server on port http://localhost:3000')
    })
}

startServer()
// Esta función asíncrona se encarga de ejecutar todo el conjunto del servidor después de que 
// se conecte a base de datos.
import express, {Express} from 'express'
import routerUser from './src/routers/routerUser'
import routerProducts from './src/routers/routerProducts'
import routerAdmin from './src/routers/routerAdmin'
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
    
    app.listen(3000, ()=>{
        console.log('server on port http://localhost:3000')
    })
}

startServer()
// Esta función asíncrona se encarga de ejecutar todo el conjunto del servidor después de que 
// se conecte a base de datos.
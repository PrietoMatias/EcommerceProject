import express, {Express} from 'express'
import routerUser from './src/routers/routerUser'
import connection from './src/services/database'

const startServer = async ():Promise<void>=>{
    await connection()

    const app:Express = express();
    app.use(express.json())
    app.use('/api', routerUser)
    
    app.listen(3000, ()=>{
        console.log('server on port http://localhost:3000')
    })
}

startServer()
// I've created a async-function that start the connection to the database and start the server
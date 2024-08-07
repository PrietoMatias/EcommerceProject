import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const uri: string | undefined = process.env.CONECTION_STRING;

if (!uri) {
    console.error('Error: CONECTION_STRING no está definido en el archivo .env');
    process.exit(1);
}

const connection = async (): Promise<void> => {
    try {
        await mongoose.connect(uri);
        console.log('Éxito al conectar con la base de datos');
    } catch (error) {
        console.error('Error, ' + error);
        process.exit(1);
    }
}

export default connection;

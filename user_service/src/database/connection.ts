import mongoose from 'mongoose'
import config from '../config';

const databaseConnection  = async() => {

    try {
        await mongoose.connect(config.DB_URL);
        console.log('Db Connected');
        
    } catch (error) {
        console.error('Error ============ ON DB Connection')
        console.log(error);
    }
 
};

export default databaseConnection

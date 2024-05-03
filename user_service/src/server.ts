import express from "express"
import cors from "cors"
import config from './config'
import {databaseConnection} from "./database";
import expressApp from "./app";
// import { CreateChannel } from "./utils"

const StartServer = async () => {

    const app = express();
    app.use(cors());
    await databaseConnection()

    await expressApp(app)

    app.use(express.static(__dirname + '/public'))

    app.listen(config.PORT, () => {
        console.log(`Server is running on PORT : ${config.PORT}`)
    }).on('error', (err) => {
        console.log(err);
        process.exit();
    })

}

StartServer()

import express from "express"
import cors from "cors"
import user from "./api/user";

const expressApp = async (app) => {

    app.use(express.json());
    app.use(cors());
    app.use(express.static(__dirname + '/public'))

    // const channel = await CreateChannel()

    app.get('/',(req,res)=>{
        res.status(200).json({status:true,message:"hello world"})
    })
    user(app);
    // error handling
    
}

export default expressApp
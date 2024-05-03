import express from 'express'
import cors from 'cors' 
import proxy from 'express-http-proxy'

const app = express()

app.use(cors());
app.use(express.json());

app.use("/user", proxy("http://localhost:8001"));
app.use("/shopping", proxy("http://localhost:8003"));
app.use("/payment", proxy("http://localhost:8002")); 


app.get('/',(req,res)=>{
    res.json({message:"Hello from gateway"})
})

app.listen(8000,()=>{
    console.log(`Server is running on PORT:8000`)
})
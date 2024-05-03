import UserService from "../services/user.service";

export default (app) =>{


    const service = new UserService();

    app.post('/signup',async (req,res,next)=>{
        const { email, password, phone } = req.body;
        const { data } = await service.SignUp({ email, password, phone}); 
        res.json(data);
    })
}
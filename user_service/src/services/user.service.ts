import { GeneratePassword, GenerateSalt } from "../utils/password";

class UserService{
    
    /*
    constructor(){
        this.repository = new 
    }
    */

    async SignUp(userInputs){
        const { email, password, phone } = userInputs;
        
        // create salt
        let salt = await GenerateSalt();
        console.log(salt)
        
        let userPassword = await GeneratePassword(password, salt);
        
        const existingCustomer = await this.repository.CreateCustomer({ email, password: userPassword, phone, salt});
        
        const token = await GenerateSignature({ email: email, _id: existingCustomer._id});
        return FormateData({id: existingCustomer._id, token });
    }

}


export default UserService;
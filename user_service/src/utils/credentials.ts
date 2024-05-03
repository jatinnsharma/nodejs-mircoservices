import bcrypt from "bcrypt"

const GenerateSalt = async () =>{
    return await bcrypt.genSalt() 
}   

const GeneratePassword = async (password,salt) =>{
    return await bcrypt.hash(password, salt);
}

const ValidatePassword = async (enteredPassword,savedPassword,salt) =>{
    return (await GeneratePassword(enteredPassword, salt)) === savedPassword;
}

export {GenerateSalt,GeneratePassword,ValidatePassword}
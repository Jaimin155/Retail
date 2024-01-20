import bcrypt from 'bcrypt'
export const hashPass= async(pass)=>{
    try{
        const saltRounds=10;
        const hashedPass =await bcrypt.hash(pass,saltRounds);
        return hashedPass
    }
    catch(error){
        console.log(error)
    }
};
export const comparePass=async(pass,hashedPass)=>{
    return bcrypt.compare(pass,hashedPass);
}
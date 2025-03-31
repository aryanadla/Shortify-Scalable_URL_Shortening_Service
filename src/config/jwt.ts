import jwt from 'jsonwebtoken';
import HttpError   from 'http-errors';

const JWT_PRIVATE_KEY = process.env.JWT_PRIVATE_KEY as string;

export const generateToken = async (payload : {[key : string] : any}) => jwt.sign(payload, JWT_PRIVATE_KEY , {expiresIn : "365d"});

export const validateJWT = async(token : string) =>{
    try{
        const content = jwt.verify(token , JWT_PRIVATE_KEY)
        return content as {[key : string] : any};
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    }catch(e){
        throw new HttpError.Unauthorized("please provide a valid token");
}
}
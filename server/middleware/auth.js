import jwt from "jsonwebtoken"
const  secret="L4lamborghini"

const auth = async (req, res,next) => {
    try{
        const token =req.headers.authorization.split(" ")[1];
        const isCustoomAuth = token.length < 500;

        let decodedToken;
        if(token && isCustoomAuth){
            decodedToken = jwt.verify(token, secret);

            req.userId = decodedToken?.id;

        }else{
            decodedToken = jwt.decode(token);
            req.userID = decodedToken?.sub;

        }
        next();
    }catch(error){
        console.log(error);
    }
}

export default auth
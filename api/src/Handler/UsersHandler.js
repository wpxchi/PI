const {createUser}= require('../Controllers.js/postUserRegistration')
const {userLogin}= require('../Controllers.js/postUserLogin')

const RegistrationHandler= async(req, res)=>{
  
    const {
      Name,
      LastName,
      UserName,
      Email,
      Password,
      Image,
    } = req.body;
    try {
      const user = await createUser(
        Name,
        LastName,
        UserName,
        Email,
        Password,
        Image,
      );
      res.status(200).json( user );
    } catch (error) {
      res.status(400).json(error);
    }
 

}

const LoginHandler= async(req, res)=>{
  const {Email, Password} = req.body;

  try {
    const UserLoged= await userLogin( Email, Password );
    res.status(200).json( UserLoged );
  } catch (error) {
    res.status(400).json(error);
  }
}




module.exports={RegistrationHandler, LoginHandler}
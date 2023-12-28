const {Router}= require ('express')
const Rusers = Router();
const {RegistrationHandler, LoginHandler}= require('../Handler/UsersHandler')

Rusers.post('/register', RegistrationHandler)
Rusers.post('/login', LoginHandler)


module.exports = Rusers;
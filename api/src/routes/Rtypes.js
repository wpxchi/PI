const {Router}= require ('express')
const Rtypes = Router();
const {getTypesHandler}=require('../Handler/TypesHandler')

Rtypes.get('/', getTypesHandler)

module.exports = Rtypes;
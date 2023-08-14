const {getTypesApi } = require ('../Controllers.js/getTypes')

const getTypesHandler= async (req, res)=>{
try {
    const types= await getTypesApi()
    res.status(200).send(types)
} catch (error) {
    res.status(400).send({error: error.message})
}
}
module.exports={getTypesHandler}
const { Router } = require('express');
const Rpokemons = require('./Rpokemons');
const Rtypes= require('./Rtypes');
const router = Router();
 
router.use('/pokemons', Rpokemons);
router.use('/types', Rtypes);


module.exports = router;

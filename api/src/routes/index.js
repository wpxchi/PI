const { Router } = require('express');
const Rpokemons = require('./Rpokemons');
const Rtypes= require('./Rtypes');
const Rusers= require('./Rusers');
const router = Router();
 
router.use('/pokemons', Rpokemons);
router.use('/types', Rtypes);
router.use('/users', Rusers )

module.exports = router;

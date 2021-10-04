const router = require("express").Router()
const superCardsCtrls = require('../controllers/superCards.controller')

router.get('/', superCardsCtrls.getSuperCards)
router.post('/', superCardsCtrls.createSuperCards)
router.put('/:cardId', superCardsCtrls.updateSuperCards)
router.delete('/:cardId', superCardsCtrls.deleteSuperCards)


module.exports = router
const router = require("express").Router()
import { getSuperCards, createSuperCards, updateSuperCards, deleteSuperCards } from '../controllers/superCards.controller'

router.get('/', getSuperCards)
router.post('/', createSuperCards)
router.put('/:cardId', updateSuperCards)
router.delete('/:cardId', deleteSuperCards)


export default router
import { Router } from 'express'
import superCardsController from '../controllers/superCards.controller'

const router = Router()

router.get('/', superCardsController.getSuperCards)
router.post('/', superCardsController.createSuperCards)
router.put('/:cardId', superCardsController.updateSuperCards)
router.delete('/:cardId', superCardsController.deleteSuperCards)


export default router
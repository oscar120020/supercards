import { Router } from 'express'
import superCardsController from '../controllers/superCards.controller'
import { verifyAuthorization } from '../middleweres/authorization'

const router = Router()

router.get('/', superCardsController.getSuperCards)
router.post('/', verifyAuthorization, superCardsController.createSuperCards)
router.put('/:cardId', verifyAuthorization, superCardsController.updateSuperCards)
router.delete('/:cardId', verifyAuthorization, superCardsController.deleteSuperCards)


export default router
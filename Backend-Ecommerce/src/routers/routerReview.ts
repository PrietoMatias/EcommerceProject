import reviewController from "../controllers/reviewController";
import { auth } from "../middlewares/auth";
import {Router} from 'express'

const router:Router = Router()

router.get('/get/product/review', reviewController.getReviewProduct)
router.post('/make/review/product', auth, reviewController.makeReview)
router.put('/update/review/product', auth, reviewController.updateReview)
router.delete('/delete/review/product', auth, reviewController.deleteReview)


export default router
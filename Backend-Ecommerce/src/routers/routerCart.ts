import { Router } from "express";
import cartController from "../controllers/cartController";
import { auth } from "../middlewares/auth";
const router:Router = Router()

router.post('/add/cart/', auth, cartController.addCart)
router.get('/get/cart', auth, cartController.getCartUser)

export default router
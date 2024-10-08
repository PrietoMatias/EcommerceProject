import orderController from "../controllers/orderController";
import { auth } from "../middlewares/auth";
import { Router } from "express";


const router:Router = Router()

router.get('/get/orders', auth, orderController.getAllOrders)
router.get('/get/order', auth, orderController.getUserOrder)
router.put('/cancel/order', auth, orderController.cancelOrder)
router.put('/make/order', auth, orderController.makeOrder)
 

export default router
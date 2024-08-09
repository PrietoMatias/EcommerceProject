import orderController from "../controllers/orderController";
import { auth } from "../middlewares/auth";
import { Router } from "express";


const router:Router = Router()

router.get('/get/orders', auth, orderController.getAllOrders)
router.get('/get/order/:id', auth, orderController.getUserOrder)
router.put('/cancel/order', auth, orderController.cancelOrder)
router.post('/make/order', auth, orderController.makeOrder)


export default router
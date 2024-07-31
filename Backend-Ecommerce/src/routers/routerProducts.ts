import { Router } from "express";
import productsControllers from '../controllers/productsController'
import { authAdmin } from "../middlewares/auth";

const router = Router()

router.post('/create/product', productsControllers.createProduct)
router.get('/get/products', authAdmin, productsControllers.getAllProducts)
router.put('/update/products/:id', authAdmin, productsControllers.updateByID)
router.post('/get/product', authAdmin, productsControllers.getByName)
router.get('/get/product/:id', authAdmin, productsControllers.getByID)
router.delete('/delete/products/:id', authAdmin, productsControllers.deleteById)


export default router;
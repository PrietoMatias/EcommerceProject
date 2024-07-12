import { Router } from "express";
import productsControllers from '../controllers/productsController'

const router = Router()

router.post('/create/product', productsControllers.createProduct)


export default router;